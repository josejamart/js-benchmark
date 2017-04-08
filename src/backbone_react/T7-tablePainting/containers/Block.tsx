import * as React from "react";
import './styles.css';

export interface IBlockProps {
    rows: any;
}

export default class Block extends React.Component<IBlockProps, any> {
    rows: any;

  renderRow(row: any){
    return (<div key={row.id}>
      {row.name} ({row.id})<br></br>
      {row.address}, {row.addressNumber}, {row.flat}<br></br>
      {row.phone}<br></br>
      {row.country}<br></br>
      {row.region}<br></br>
      {row.city}<br></br>
      <hr></hr>
      </div>
    );
  }
	render() {
    let rows = [];
    for(let row of this.props.rows){
      rows.push(this.renderRow(row));
    }
		return (
			<div className="block">
				{rows}
			</div>
		);
	}
}
