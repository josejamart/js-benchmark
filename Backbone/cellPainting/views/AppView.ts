import * as Backbone from 'backbone';
import * as CellsCollection from '../models/CellsCollection';

class AppView extends Backbone.View<Backbone.Model>{
  cells: CellsCollection;
  constructor() {

  		super();
  		this.setElement($('.cellPaintingApp'), true);

      this.cells = new CellsCollection();

  		this.cells.bind('all', this.render);
  		this.cells.fetch();
  	}

    render(){
      this.$el.html(this.)
    }
}
