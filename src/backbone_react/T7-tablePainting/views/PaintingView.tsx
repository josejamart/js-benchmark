import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import Block from "../containers/Block";
import {RowCollection} from '../models/RowCollection';

export class PaintingView extends Backbone.View<Backbone.Model>{
  rows: RowCollection;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
        this.listenTo(this.rows, "reset",this.render);
    }

    render() {
      ReactDOM.render(<Block rows={this.rows.toJSON()} />, this.el);
      return this;
    }
}
