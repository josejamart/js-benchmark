import * as React from "react";

var data = require("../../../data/cellData.json");

export interface IAppProps {
  name?: string;
}

export default class App extends React.Component<IAppProps, {}> {

  public render() {
    return (
      <div>
        {this.renderCells()}
      </div>
    );
  }

  private renderCells() {
    return data.map((element: any) => {
      return (
        <div>
          {
            element.cells.map((item: any) => {
              return (
                <span> {item.text} </span>
              );
            })
          }
        </div>);
    })
  }
}



