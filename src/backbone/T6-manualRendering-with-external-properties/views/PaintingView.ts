import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {ButtonsView} from './ButtonsView';
import {BlockView} from './BlockView';

export class PaintingView extends Backbone.View<Backbone.Model>{
    buttonView: ButtonsView;
    blockView: BlockView;
    constructor(options?: any) {
        super(options);
        this.buttonView = new ButtonsView();
        this.blockView = new BlockView({buttonsModel: this.buttonView.model});
    }
    render() {
        this.$el.find(".buttons").html(this.buttonView.render().el);
        this.$el.find(".block").html(this.blockView.render().el);
        return this;
    }
}
