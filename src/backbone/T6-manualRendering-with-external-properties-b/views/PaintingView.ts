import * as Backbone from 'backbone';
import * as $ from 'jquery';
import {ButtonsView} from './ButtonsView';
import {BlockView} from './BlockView';

export class PaintingView extends Backbone.View<Backbone.Model>{
    buttonView: ButtonsView;
    blockView: BlockView;
    constructor(options?: any) {
        super(options);
        var self = this;
        this.blockView = new BlockView();
        this.buttonView = new ButtonsView({
          onFirstClick : () => {
            self.blockView.firstClick()},
          onSecondClick :  () => {
            this.blockView.secondClick()},
          onThirdClick :  () => {
            this.blockView.thirdClick()}
        });
    }
    render() {
        this.$el.find(".buttons").html(this.buttonView.render().el);
        this.$el.find(".block").html(this.blockView.render().el);
        return this;
    }
}
