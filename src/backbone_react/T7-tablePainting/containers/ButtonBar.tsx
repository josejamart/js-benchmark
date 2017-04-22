import * as React from "react";

export interface IButtonBarProps {
	onFirstClick(): void;
	onSecondClick(): void;
}

export default class ButtonBar extends React.Component<IButtonBarProps, any> {
	constructor(props: IButtonBarProps){
		super(props);
		this.handleFirstClick = this.handleFirstClick.bind(this);
		this.handleSecondClick = this.handleSecondClick.bind(this);
	}

	handleFirstClick(){
		this.props.onFirstClick();
	}

	handleSecondClick(){
		this.props.onSecondClick();
	}

	render() {
		return (<div>
				<button type="button" onClick={this.handleFirstClick}>Reset</button>
				<button type="button" onClick={this.handleSecondClick}>Change</button>
			</div>
		);
	}
}
