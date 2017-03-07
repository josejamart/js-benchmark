import * as React from "react";

export interface IMessageProps {
	model: Backbone.Model;
}

export default class Message extends React.Component<IMessageProps, any> {
  constructor(props: IMessageProps) {
    super(props);
    this.state = props.model.toJSON();
    props.model.on("change",this.updateState,this);
  }
  updateState(model:any) {
    this.setState(model.toJSON());
  }
  componentWillUnmount(){
    this.props.model.off("change",this.updateState);
  }

	render() {
		return (
			<div>{this.state.text}</div>
		);
	}
}
