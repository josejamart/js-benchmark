import * as React from "react";
import {CellModel} from "../models/CellModel";

export interface IAppProps {
	cell: CellModel;
}

export default class Cell extends React.Component<IAppProps, any> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      cell: props.cell.toJSON(),
      isRed: false,
      isBlue: false
    };
    props.cell.on("change",this.updateState,this);
    this.printRed = this.printRed.bind(this);
    this.printBlue = this.printBlue.bind(this);
  }

  componentWillUnmount(){
    this.props.cell.off("change",this.updateState);
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

  updateState(model:any) {
    this.setState({cell : model.toJSON()});
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
      <span onClick={this.printRed} onDoubleClick={this.printBlue} style={style} key={this.state.cell.id} data-cid={this.state.cell.id}> {this.state.cell.text} </span>
    );
  }
}
