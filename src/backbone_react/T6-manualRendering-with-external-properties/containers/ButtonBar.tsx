import * as React from "react";

export interface IButtonBarProps {
	onFirstClick(): void;
	onSecondClick(): void;
	onThirdClick(): void;
}

export default class ButtonBar extends React.Component<IButtonBarProps, any> {
	constructor(props: IButtonBarProps){
		super(props);
		this.handleFirstClick = this.handleFirstClick.bind(this);
		this.handleSecondClick = this.handleSecondClick.bind(this);
		this.handleThirdClick = this.handleThirdClick.bind(this);
	}

	handleFirstClick(){
		this.props.onFirstClick();
	}

	handleSecondClick(){
		this.props.onSecondClick();
	}

	handleThirdClick(){
		this.props.onThirdClick();
	}

	render() {
		return (<div>
				<button type="button" onClick={this.handleFirstClick}>First</button>
				<button type="button" onClick={this.handleSecondClick}>Second</button>
				<button type="button" onClick={this.handleThirdClick}>Third</button>
			</div>
		);
	}
}
