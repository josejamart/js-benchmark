import * as Backbone from 'backbone';
import {CellCollection} from '../models/CellCollection';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
  cells: CellCollection;
  constructor() {

  		super();
  		this.setElement($('.cellPaintingApp'), true);

      this.cells = new CellCollection();

  		this.cells.bind('all', this.render);
  		this.cells.fetch();
  	}

    render(){
      //this.$el.html(this.)
      return this;
    }
}
