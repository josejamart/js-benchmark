import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';
import {CellCollection} from '../models/CellCollection';
import {CellModel} from '../models/CellModel';

export class CellView extends Backbone.View<Backbone.Model>{
  template: (data: any) => string;
  cells: CellCollection;
  constructor(options?: any){
    super(options);
    this.template = Handlebars.compile($('#row-template').html());
  }
  render(){
    this.$el.html(this.template({cid: this.cid}));

    /*for (let cell of this.cells.models) {
      this.$el.find("."+this.cid).append(cell.render().$el);
    }*/
    return this;

  }
}
