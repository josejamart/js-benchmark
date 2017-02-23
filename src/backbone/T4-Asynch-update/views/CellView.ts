import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';
import * as $ from 'jquery';

export class CellView extends Backbone.View<Backbone.Model>{
    template: (data: any) => string;
    constructor(options?: any) {
        options.tagName = "span";
        super(options);
        this.template = _.template($('#cell-template').html());
        this.listenTo(this.model, "change",this.render);
    }
    render() {
        this.$el.attr("data-cid", this.cid);
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
}
