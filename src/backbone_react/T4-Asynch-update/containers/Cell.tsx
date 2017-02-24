import * as React from "react";
import {CellModel} from "../models/CellModel";

export interface IAppProps {
	cell: CellModel;
}

export default class Cell extends React.Component<IAppProps, any> {
  constructor(props: IAppProps) {
    super(props);
    this.state = props.cell.toJSON();
    props.cell.on("change",this.updateState,this);
  }
  updateState(model:any) {
    this.setState(model.toJSON());
  }
	render() {
		return (
			<span key={this.state.id} data-cid={this.state.id}> {this.state.text} </span>
		);
	}
}
