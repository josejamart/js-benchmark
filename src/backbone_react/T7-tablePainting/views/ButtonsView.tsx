import * as Backbone from 'backbone';
import * as Handlebars from 'handlebars';
import * as _ from 'underscore';
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Buttons from '../containers/ButtonBar';

export class ButtonsView extends Backbone.View<Backbone.Model>{
  onFirstClick: Function;
  onSecondClick: Function;
  template: (data: any) => string;
  constructor(options?: any) {
    options.tagName = "span";
    super(options);
    this.onFirstClick = options.onFirstClick;
    this.onSecondClick = options.onSecondClick;
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
  }
  handleFirstClick() {
    this.onFirstClick();
  }
  handleSecondClick() {
    this.onSecondClick();
  }
  render() {
    ReactDOM.render(<Buttons onFirstClick={this.handleFirstClick} onSecondClick={this.handleSecondClick} />, this.el);
    return this;
  }
}
