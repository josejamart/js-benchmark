import * as Backbone from 'backbone';
import * as _ from 'underscore';
import * as $ from 'jquery';

export class ButtonsView extends Backbone.View<Backbone.Model>{
  onFirstClick: Function;
  onSecondClick: Function;
  onThirdClick: Function;
  template: (data: any) => string;
  constructor(options?: any) {
    super(options);
    this.template = _.template($('#button-template').html());
    this.onFirstClick = options.onFirstClick;
    this.onSecondClick = options.onSecondClick;
    this.onThirdClick = options.onThirdClick;
  }
  events() {
    return {
      "click .b1": "firstClick",
      "click .b2": "secondClick",
      "click .b3": "thirdClick"
    }
  }
  firstClick() {
    this.onFirstClick();
  }
  secondClick() {
    this.onSecondClick();
  }
  thirdClick() {
    this.onThirdClick();
  }
  render() {
    this.$el.html(this.template({}));
    return this;
  }
}
