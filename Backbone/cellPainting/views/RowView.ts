import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';
import {CellCollections} from '../models/CellCollection';

class CellView extends Backbone.View<Backbone.Model>{
  template: (data: any) => string;
  cells: CellsCollections;
  constructor(options?: any){
    super(options);
    this.template = Handlebars.compile($('#row-template').html());
  }
  render(){
    this.$el.html(this.template({cid: this.cid}));

    for (let cell of this.cells) {
      this.$el.find("."+this.cid).apped(this.cell.render());
    }

  }
}
