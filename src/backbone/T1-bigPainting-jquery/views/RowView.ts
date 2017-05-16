import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {CellCollection} from '../models/CellCollection';
import {CellModel} from '../models/CellModel';
import {CellView} from './CellView';

export class RowView extends Backbone.View<Backbone.Model>{
    template: (data: any) => string;
    cells: CellCollection;
    constructor(options?: any) {
        super(options);
        this.template = _.template($('#row-template').html());
    }
    render() {
        this.$el.attr("data-cid", this.cid);
        this.$el.html(this.template({ cid: this.cid }));
        for (let model of this.model.get("cells").models) {
            this.$el.eq(0).append(new CellView({ model: model }).render().el);
        }
        return this;

    }
}
