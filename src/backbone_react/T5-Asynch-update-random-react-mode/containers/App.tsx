import * as React from "react";
import {RowCollection} from '../models/RowCollection';

export interface IAppProps {
	rows: RowCollection;
}

export default class App extends React.Component<IAppProps, any> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      rows: props.rows.toJSON(),
      isRed: false,
      isBlue: false
    };
    props.rows.on("reset",this.updateState,this);

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

  updateState(rows:any) {
    this.setState({rows: rows.toJSON()});
  }
  componentWillUnmount(){
    this.props.rows.off("reset",this.updateState);
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
    let cells = [];
    let rows = [];
    for (var i=0; i < this.state.rows.length; i++) {
      for (var j=0; j < this.state.rows[i].cells.length; j++) {
          cells.push(<span onClick={this.printRed} onDoubleClick={this.printBlue} style={style} key={j}><b>-|-</b>{this.state.rows[i].cells[j].text}<b>-|-</b></span>);
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
