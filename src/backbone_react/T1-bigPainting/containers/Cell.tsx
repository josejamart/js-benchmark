import * as React from "react";
import {CellModel} from "../models/CellModel";

export interface IAppProps {
	cell: CellModel;
}

export default class Cell extends React.Component<IAppProps, any> {
	render() {
		return (
			<span> {this.props.cell.attributes.text} </span>
		);
	}
}
