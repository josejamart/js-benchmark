import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {RowCollection} from '../models/RowCollection';
import {RowView} from './RowView';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    constructor(options?) {
        super(options);
        this.rows = options.data;
    }

    render() {
        //this.$el.html(this.)
        for (let model of this.rows.models) {
            this.$el.append(new RowView({ model: model }).render().el);
        };

        return this;
    }
}
