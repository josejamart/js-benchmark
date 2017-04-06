import * as Backbone from 'backbone';
import * as _ from 'underscore';
import * as $ from 'jquery';
import './styles.css';

export class BlockView extends Backbone.View<Backbone.Model>{
  buttonModel: Backbone.Model;
  template: (data: any) => string;
  constructor(options?: any) {
    super(options);
    this.template = _.template($('#block-template').html());
    this.buttonModel = options.buttonsModel;
    this.listenTo(this.buttonModel, "click:first", this.firstClick);
    this.listenTo(this.buttonModel, "click:second", this.secondClick);
    this.listenTo(this.buttonModel, "click:third", this.thirdClick);
  }
  firstClick() {
    if (this.$el.find(".js-1").css("display") !== "none") {
      this.$el.find(".js-1").css("display", "none");
    } else {
      this.$el.find(".js-1").css("display", "");
    }
  }
  secondClick() {
    if (this.$el.find(".js-2 span").text() !== "2") {
      this.$el.find(".js-2 span").text("2");
    } else {
      this.$el.find(".js-2 span").text("two");
    }
  }
  thirdClick() {
    if (this.$el.find(".js-1").hasClass("RT")) {
      this.$el.find(".js-1").addClass("LB");
      this.$el.find(".js-3").addClass("RT");
      this.$el.find(".js-1").removeClass("RT");
      this.$el.find(".js-3").removeClass("LB");
    } else {
      this.$el.find(".js-1").addClass("RT");
      this.$el.find(".js-3").addClass("LB");
      this.$el.find(".js-1").removeClass("LB");
      this.$el.find(".js-3").removeClass("RT");
    }
  }
  render() {
    this.$el.html(this.template({}));
    return this;
  }
}
