import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import {template} from '../models/templateCompiled';

export class CellView extends Backbone.View<Backbone.Model>{
  constructor(options?: any) {
    options.tagName = "span";
    super(options);
  }
  render() {
    this.$el.attr("data-cid", this.cid);
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
}
