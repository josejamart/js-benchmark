import * as React from "react";
import Cell from "./Cell";
import {CellCollection} from "../models/CellCollection";

export interface IAppProps {
	cells: CellCollection;
}

export default class Row extends React.Component<IAppProps, any> {
	render() {
    let cells = [];
    for (var i=0; i < this.props.cells.length; i++) {
        cells.push(<Cell cell={this.props.cells.models[i]}/>);
    }
		return (
			<div>{cells}</div>
		);
	}
}
