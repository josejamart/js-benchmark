import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as Handlebars from 'handlebars';
import {RowCollection} from '../models/RowCollection';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    template: (data: any) => string;
    constructor(options?) {
        super(options);
        this.rows = options.data;
        this.template = Handlebars.compile($('#all-template').html());
    }

    render() {
        this.$el.html(this.template({ rows: this.rows.toJSON() }))

        return this;
    }
}
