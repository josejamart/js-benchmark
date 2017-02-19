import * as Backbone from 'backbone';
import {AppWorkflowModel} from '../models/AppWorkflowModel';
import * as _ from 'underscore';
import * as moment from 'moment';

export class AppView extends Backbone.View<Backbone.Model>{
    workflow: AppWorkflowModel;
    executionId: string;
    constructor(options: any) {
        super(options);
        this.executionId = "t-id-" + _.random(0, 100);
        this.workflow = new AppWorkflowModel();
        this.listenTo(this.workflow.categories, "sync", this.startTests);
        var self = this;
        window.addEventListener('storage', function(e) {
            if (_.indexOf(e.key, self.executionId)) {
                let testId = e.key.split("_")[1];
                self.updateTextResult(testId, JSON.parse(e.newValue));
            }
        });
    }

    render() {
        this.$el.html("");
        return this;
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

    startTests() {
      let urls = [];
        this.$el.html("Starting test ..");
        for (let category of this.workflow.categories.models) {
            this.$el.append("<div data-id='" + category.get("id") + "'><b>" + category.get("title") + "</b></div>");
            for (let test of category.get("tests").models) {
                if (!_.isEmpty(test.get("url"))) {
                    this.$el.append("<div>" + test.get("title") + "</div>");
                    this.$el.append("<div data-id='" + test.collection.categoryId + "-" + test.get("id") + "'></div>");
                    urls.push(test.get("url") + "#" + this.executionId + "_" + test.collection.categoryId + "-" + test.get("id"));
                }
            }
        }
        this.openTest(urls,0);
    }

    updateTextResult(id: string, result: any) {
        let duration = moment.duration(result.totalTime);
        let time = duration.get('minutes') + "m " + duration.get('seconds') + "s " + duration.get('milliseconds') + "ms";
        this.$el.find("[data-id=" + id + "]").html("Time elapsed: " + time + " (" + result.totalTime + " ms)");
    }
}
