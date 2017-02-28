import * as Backbone from 'backbone';
import * as _ from 'underscore';
import {CategoryCollection} from './CategoryCollection';

export class AppWorkflowModel extends Backbone.Model {
    categories: CategoryCollection;
    close: boolean;
    ids: Array<string>;
    executionId: string;
    idTest: number;
    constructor() {
        super();
        this.categories = new CategoryCollection();
    }

    setUp(closeWindow: boolean = false, ids: Array<string>) {
      this.close = closeWindow;
      this.ids = ids;
      this.idTest = _.random(0, 100);
      this.executionId = "t-id-" + this.idTest;
      this.categories.fetch();
    }

openTests(){
  let urls = [];
  for (let category of this.categories.models) {
      for (let test of category.get("tests").models) {
          if (!_.isEmpty(test.get("url")) && test.get("enabled") && (this.ids.length === 0 || this.ids.indexOf(category.get("id")+"-"+test.get("id")) >= 0)) {
            let url = test.get("url") + "#" + this.executionId + "_" + test.collection.categoryId + "-" + test.get("id");
            if(this.close === false){
              url += "/close=false";
            }
            urls.push(url);
          }
      }
  }

  this.openTest(urls,0);
}

    openTest(urls: Array<string>,index: number){
      if(index < urls.length){
          let newWindow = window.open(urls[index]);
          let self = this;
          newWindow.onunload = function(e) {
            self.openTest(urls,index+1);
        };
      }
    }
}
