import React from "react";
import ReactSVG from "react-svg";
import Form from "./Form";

export default class Rocket extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rocket: "resting"
        };
    }

    toogleRocket(state) {

        if (state != this.state.rocket)
            this.setState({rocket: state});

    }

    render() {
        return (
            <div className="wrapper-form d-flex">
                <Form toogleRocket={this.toogleRocket.bind(this)} />
                <ReactSVG 
                    path="./icons/rocket.svg" 
                    className={"rocket-wrapper " + this.state.rocket} />
            </div>
        );
    }

}