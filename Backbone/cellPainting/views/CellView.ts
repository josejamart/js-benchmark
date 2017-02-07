import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';

export class CellView extends Backbone.View<Backbone.Model>{
  template: (data: any) => string;
  constructor(options?: any){
    super(options);
    this.template = Handlebars.compile($('#cell-template').html());
  }
  render(){
    this.$el.html(this.template(_.extend({},this.model.toJSON(),{cid: this.cid})));
    return this;
  }
}
