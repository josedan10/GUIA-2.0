import React from "react";
import ReactSVG from "react-svg";

export default class Rocket extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rocket: "resting"
        };
    }

    takeOff() {
        this.setState({rocket: "initializing"});
    }

    render() {
        return <ReactSVG 
                    path="./icons/rocket.svg" 
                    className={"rocket-wrapper " + this.state.rocket}
                    onClick={this.takeOff.bind(this)}/>;
    }

}