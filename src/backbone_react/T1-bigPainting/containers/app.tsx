import * as React from "react";
import Row from "./Row";
import {RowCollection} from '../models/RowCollection';

export interface IAppProps {
	rows: RowCollection;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
    let rows = [];
    for (var i=0; i < this.props.rows.length; i++) {
        rows.push(<Row cells={this.props.rows.models[i].attributes.cells}/>);
    }
		return (
			<div>{rows}</div>
		);
	}
}
