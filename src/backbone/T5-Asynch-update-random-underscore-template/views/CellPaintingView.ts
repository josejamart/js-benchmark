import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {RowCollection} from '../models/RowCollection';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    template: (data: any) => string;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
        this.listenTo(this.rows, "reset",this.render);
        this.template = _.template($('#all-template').html());
    }
    events() {
        return {
          'click .text': 'printRed',
          'dblclick .text': 'printBlue'
        }
    }
    render() {
        this.$el.html(this.template({ rows: this.rows.toJSON() }))

        return this;
    }
}
