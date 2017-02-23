import * as React from "react";
import {RowCollection} from '../models/RowCollection';

export interface IAppProps {
	rows: RowCollection;
}

export default class App extends React.Component<IAppProps, any> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {rows: props.rows.toJSON()};
    props.rows.on("reset",this.updateState,this);
  }
  updateState(rows:any) {
    this.setState({rows: rows.toJSON()});
  }
  componentWillUnmount(){
    this.props.rows.off("reset",this.updateState);
  }
	render() {
    let cells = [];
    let rows = [];
    for (var i=0; i < this.state.rows.length; i++) {
      for (var j=0; j < this.state.rows[i].cells.length; j++) {
          cells.push(<span key={j}> {this.state.rows[i].cells[j].text} </span>);
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
