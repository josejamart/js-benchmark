import * as Backbone from 'backbone';
import * as _ from 'underscore';
import * as $ from 'jquery';
import {RowCollection} from '../models/RowCollection';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    template: (data: any) => string;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
        this.template = _.template($('#table-template').html());
        this.listenTo(this.rows, "reset",this.render);
    }

    render() {
      this.$el.html(this.template({rows:this.rows.toJSON()}));
      return this;
    }
}
