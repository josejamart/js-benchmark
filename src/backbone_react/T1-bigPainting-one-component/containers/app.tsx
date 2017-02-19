import * as React from "react";
import {RowCollection} from '../models/RowCollection';

export interface IAppProps {
	rows: RowCollection;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
    let cells = [];
    let rows = [];
    for (var i=0; i < this.props.rows.length; i++) {
      for (var j=0; j < this.props.rows.models[i].attributes.cells.length; j++) {
          cells.push(<span key={j}> {this.props.rows.models[i].attributes.cells.models[j].attributes.text} </span>);
      }
      rows.push(<div key={i}>{cells}</div>);
      cells=[];
    }
		return (
			<div key="0">
      {rows}
      </div>
		);
	}
}
