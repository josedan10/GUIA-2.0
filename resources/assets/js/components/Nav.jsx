import React from "react";


export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
        
    }

    handleClick() {
        console.log("Handle works");
        this.setState({open: !this.state.open});
        console.log("The menu is " + (this.state.open) ? "opened" : "closed");
    }

    render() {
        return (
            <nav className="nav-container">

                <a className="menu-actions" href="javascript:;" onClick={this.handleClick}>
                    <i className="icon-icon-menu"></i>
                    <span>MENU</span>
                </a>

                <ul className="nav-menu">
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">CALENDAR</a></li>
                    <li><a href="">SIRIUS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>

            </nav>
        );
    }
}