import * as Backbone from 'backbone';
import * as _ from 'underscore';
import * as $ from 'jquery';

export class ButtonsView extends Backbone.View<Backbone.Model>{
    template: (data: any) => string;
    constructor(options?: any) {
        super(options);
        this.template = _.template($('#button-template').html());
        this.model = new Backbone.Model();
    }
    events(){
      return {
        "click .b1" : "firstClick",
        "click .b2" : "secondClick",
        "click .b3" : "thirdClick"
      }
    }
    firstClick(){
      this.model.trigger("click:first");
    }
    secondClick(){
        this.model.trigger("click:second");
    }
    thirdClick(){
      this.model.trigger("click:third");
    }
    render() {
        this.$el.html(this.template({}));
        return this;
    }
}
