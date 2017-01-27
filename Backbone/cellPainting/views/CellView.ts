import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';

class CellView extends Backbone.View<Backbone.Model>{
  template: (data: any) => string;
  constructor(options?: any){
    super(options);
    this.template = Handlebars.compile($('#cell-template').html());
  }
  render(){
    this.$el.html(this.template(_.entend({},this.model.toJSON(),{cid: this.cid})));
  }
}
