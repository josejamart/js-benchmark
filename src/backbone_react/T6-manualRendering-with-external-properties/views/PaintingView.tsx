import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Block from "../containers/Block";
import Buttons from '../containers/ButtonBar';

export class PaintingView extends Backbone.View<Backbone.Model>{
  firstHidden: boolean;
  toogleSecond: boolean;
  swapElement: boolean;
    constructor(options?: any) {
        super(options);
        this.firstHidden = false;
        this.toogleSecond = false;
        this.swapElement = false;
        this.handleFirstClick = this.handleFirstClick.bind(this);
        this.handleSecondClick = this.handleSecondClick.bind(this);
        this.handleThirdClick = this.handleThirdClick.bind(this);
    }

    handleFirstClick(){
      this.firstHidden = !this.firstHidden;
      this.renderBlock();
    }

    handleSecondClick(){
      this.toogleSecond = !this.toogleSecond;
      this.renderBlock();
    }

    handleThirdClick(){
      this.swapElement = !this.swapElement;
      this.renderBlock();
    }

    renderBlock(){
      ReactDOM.render(<Block firstHidden={this.firstHidden} toogleSecond={this.toogleSecond} swapElement={this.swapElement} />, this.$el.find(".block")[0]);
    }

    render() {
      ReactDOM.render(<Buttons onFirstClick={this.handleFirstClick} onSecondClick={this.handleSecondClick} onThirdClick={this.handleThirdClick}/>, this.$el.find(".buttons")[0]);
      this.renderBlock();
      return this;
    }
}
