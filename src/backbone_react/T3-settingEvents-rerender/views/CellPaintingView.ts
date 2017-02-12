import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {RowCollection} from '../models/RowCollection';
import {RowView} from './RowView';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    views: Array<RowView>;
    constructor(options?) {
        super(options);
        this.rows = options.data;
        this.views = [];
    }

    render() {
        //this.$el.html(this.)
        for (let model of this.rows.models) {
            let view = new RowView({ model: model });
            this.views.push(view);
            this.$el.append(view.render().el);
        };

        return this;
    }

    rerender() {
        for (let view of this.views) {
            view.rerender();
        };
        return this;
    }
}
