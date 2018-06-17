import React from "react";
import ReactSVG from "react-svg";


export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: ""
        };

        this.igLogo = <ReactSVG path="../icons/instagram.svg" />;
        this.twtLogo = <ReactSVG path="../icons/twitter.svg" />;
        this.fbLogo = <ReactSVG path="../icons/facebook.svg" />;
        this.threeDLogo = <ReactSVG path="../icons/3dmensional.svg" />;
        
    }

    handleClick() {
        this.setState({...this.state, open: (this.state.open != "open") ? "open" : "close"}); 
    }

    render() {

        let stateMenu = this.state.open;

        return (
            <nav className={"nav-container " + stateMenu}>

                <a className="menu-actions" href="javascript:;" onClick={this.handleClick.bind(this)}>
                    <i className="icon-icon-menu"></i>
                    <span>MENU</span>
                </a>

                <div className={"show-box center wrapper " + stateMenu}>

                    <ul className="nav-menu center vertical">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#aboutUs">ABOUT US</a></li>
                        <li><a href="">CALENDAR</a></li>
                        <li><a href="">SIRIUS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>

                    <div className="sites-container around">
                    
                        <span className="line-decoration"></span>

                        <div className="social-networks center">
                            <a href="">{this.igLogo}</a>
                            <a href="">{this.twtLogo}</a>
                            <a href="">{this.fbLogo}</a>
                        </div>
                        
                        <a href="">{this.threeDLogo}</a>

                        <span className="line-decoration"></span>
                    </div>


                </div>

            </nav>
        );
    }
}