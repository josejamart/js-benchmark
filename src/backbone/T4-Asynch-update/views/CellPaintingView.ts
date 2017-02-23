import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {RowCollection} from '../models/RowCollection';
import {RowView} from './RowView';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
    }

    render() {
        //this.$el.html(this.)
        let array = [];
        for (let model of this.rows.models) {
            array.push(new RowView({ model: model }).render().el);
        };
        this.$el.append(array);

        return this;
    }
}
