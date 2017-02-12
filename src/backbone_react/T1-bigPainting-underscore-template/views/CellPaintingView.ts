import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {RowCollection} from '../models/RowCollection';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    template: (data: any) => string;
    constructor(options?) {
        super(options);
        this.rows = options.data;
        this.template = _.template($('#all-template').html());
    }

    render() {
        this.$el.html(this.template({ rows: this.rows.toJSON() }))

        return this;
    }
}
