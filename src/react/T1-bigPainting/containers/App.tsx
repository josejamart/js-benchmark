import * as React from "react";

var data = require("../../../data/cellData.json");

export interface IAppProps {
    name?: string;
}

export default class App extends React.Component<IAppProps, {}> {
    public static defaultProps: IAppProps = {
        name: "TypeScript Card Types demo"
    };
    public render() {
        const article = {
            date: new Date().toLocaleDateString("en-GB").replace(/\//g, "."),
        };

        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <div id={"1"}></div>
            </div>


        );
    }
}
