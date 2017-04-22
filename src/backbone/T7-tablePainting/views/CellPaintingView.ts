import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {RowCollection} from '../models/RowCollection';
import {RowView} from './RowView';

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    views: Array<RowView>;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
        this.listenTo(this.rows, "reset",this.rerender);
        this.views = [];
    }

    render() {
        this.$el.empty();
        for (let model of this.rows.models) {
          let view = new RowView({ model: model });
          this.views.push(view);
          this.$el.append(view.render().el);
        };

        return this;
    }

    rerender(){
        for (let view of this.views) {
          view.render();
        }
    }
}
