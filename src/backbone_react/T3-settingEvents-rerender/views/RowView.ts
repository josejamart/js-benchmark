import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {CellCollection} from '../models/CellCollection';
import {CellModel} from '../models/CellModel';
import {CellView} from './CellView';

export class RowView extends Backbone.View<Backbone.Model>{
    template: (data: any) => string;
    cells: CellCollection;
    views: Array<CellView>;
    constructor(options?: any) {
        super(options);
        this.template = _.template($('#row-template').html());
        this.views = [];
    }
    render() {
        this.$el.attr("data-cid", this.cid);
        this.$el.html(this.template({ cid: this.cid }));
        for (let model of this.model.get("cells").models) {
            let view = new CellView({ model: model });
            this.views.push(view);
            this.$el.eq(0).append(view.render().el);
        }
        return this;

    }
    rerender() {
        for (let view of this.views) {
            view.render();
        };
        return this;
    }
}
