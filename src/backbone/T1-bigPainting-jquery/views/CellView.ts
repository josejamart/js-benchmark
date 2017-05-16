import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as $ from 'jquery';

export class CellView extends Backbone.View<Backbone.Model>{
  constructor(options?: any) {
    options.tagName = "span";
    super(options);
  }
  render() {
    this.$el.attr("data-cid", this.cid);
    var $div: any = $("<div>");
    $div.text(this.model.get("text"));
    var $span = $("<span>");
    if (this.model.get("text").length % 2 == 0) {
      $span.addClass("par");
      $span.text("PAR");
    } else {
      $span.addClass("impar");
      $span.text("IMPAR");
    }
    $div.append($span);
    this.$el.html($div);
    return this;
  }
}
