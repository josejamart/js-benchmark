import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';
import * as $ from 'jquery';

export class ButtonsView extends Backbone.View<Backbone.Model>{
  onFirstClick: Function;
  onSecondClick: Function;
  template: (data: any) => string;
  constructor(options?: any) {
    options.tagName = "span";
    super(options);
    this.template = _.template($('#buttons-template').html());
    this.onFirstClick = options.onFirstClick;
    this.onSecondClick = options.onSecondClick;
  }
  events() {
    return {
      "click .b1": "firstClick",
      "click .b2": "secondClick"
    }
  }
  firstClick() {
    this.onFirstClick();
  }
  secondClick() {
    this.onSecondClick();
  }
  render() {
    this.$el.html(this.template({}));
    return this;
  }
}
