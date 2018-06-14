import React from "react";


export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
        
    }

    handleClick() {
        this.setState({...this.state, open: !this.state.open}); 
    }

    render() {

        let stateMenu = (this.state.open) ? "open" : "";

        return (
            <nav className="nav-container">

                <a className="menu-actions" href="javascript:;" onClick={this.handleClick.bind(this)}>
                    <i className="icon-icon-menu"></i>
                    <span>MENU</span>
                </a>

                <ul className={"nav-menu " + stateMenu}>
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