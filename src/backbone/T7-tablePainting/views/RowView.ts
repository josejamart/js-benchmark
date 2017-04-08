import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';

export class RowView extends Backbone.View<Backbone.Model>{
    template: (data: any) => string;
    constructor(options?: any) {
        super(options);
        this.template = _.template($('#row-template').html());
    }
    render() {
        this.$el.attr("data-cid", this.cid);
        this.$el.html(this.template(_.extend({ cid: this.cid },this.model.toJSON())));

        return this;

    }
}
