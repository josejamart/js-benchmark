import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {RowCollection} from '../models/RowCollection';
import App from "../containers/app";

export class CellPaintingView extends Backbone.View<Backbone.Model>{
    rows: RowCollection;
    constructor(options?: any) {
        super(options);
        this.rows = options.data;
    }

    render() {
      ReactDOM.render(<App rows={this.rows} />, this.el);
      return this;
    }
}
