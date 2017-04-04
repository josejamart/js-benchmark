import * as React from "react";
import './styles.css';

export interface IBlockProps {
	firstHidden: boolean;
	toogleSecond: boolean;
	swapElement: boolean;
}

export default class Block extends React.Component<IBlockProps, any> {
	render() {
		let number: string | number = 2;
		let firstStyle: string = "RT";
		let lastStyle: string = "LB";

		let numberStyle = null;
    if(this.props.firstHidden == true){
			numberStyle = {
				display: "none"
			}
		}
		if(this.props.toogleSecond == true){
			number = "two";
		}
		if(this.props.swapElement == true){
			firstStyle = "LB";
			lastStyle = "RT";
		}

		return (
			<div className="block">
				<div className={"corner "+firstStyle+" color1"} style={numberStyle}><span>1</span></div>
				<div className="corner RB color2"><span>{number}</span></div>
				<div className={"corner "+lastStyle+" color2"}><span>3</span></div>
				<div className="corner LT color1"><span>4</span></div>
			</div>
		);
	}
}
