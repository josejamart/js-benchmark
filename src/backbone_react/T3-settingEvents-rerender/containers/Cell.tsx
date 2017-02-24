import * as React from "react";
import {CellModel} from "../models/CellModel";

export interface IAppProps {
	cell: CellModel;
}

export default class Cell extends React.Component<IAppProps, any> {
  constructor(props:IAppProps ) {
    super(props);

    this.state = {isRed: false, isBlue: false};

    this.printRed = this.printRed.bind(this);
    this.printBlue = this.printBlue.bind(this);
  }
  printRed() {
    this.setState(prevState => ({
     isRed: true,
     isBlue: false
   }));
  }
  printBlue() {
    this.setState(prevState => ({
     isRed: false,
     isBlue: true
   }));
  }
	render() {
    let style = {};
    const redStyle = {
    color: 'red'
  };
  const blueStyle = {
    color: 'blue'
  };
  if(this.state.isRed){
    style = redStyle;
  }else if(this.state.isBlue){
    style = blueStyle;
  }
		return (
			<span onClick={this.printRed} onDoubleClick={this.printBlue} style={style}> {this.props.cell.attributes.text} </span>
		);
	}
}
