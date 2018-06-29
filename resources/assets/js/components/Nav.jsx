import React from "react";
import ReactSVG from "react-svg";


export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: ""
        };

        this.igLogo = <ReactSVG className="svg-container" path="../icons/instagram.svg" />;
        this.twtLogo = <ReactSVG className="svg-container" path="../icons/twitter.svg" />;
        this.fbLogo = <ReactSVG className="svg-container" path="../icons/facebook.svg" />;
        this.threeDLogo = <ReactSVG className="svg-container" path="../icons/3dmensional.svg" />;
        
    }

    handleClick() {
        this.setState({...this.state, open: (this.state.open != "open") ? "open" : "close"}); 
    }

    render() {

        let stateMenu = this.state.open;

        return (
            <nav className={"container " + stateMenu}>
                <div className="columns">
                    <a className="menu-actions column col-ml-auto" href="javascript:;" onClick={this.handleClick.bind(this)}>
                        <i className="icon-icon-menu"></i>
                        <span>MENU</span>
                    </a>
                </div>

                <div className="columns">
                    <div className={"column container show-box " + stateMenu}>

                        <div className="columns col-gapless">

                            <div className="nav-menu-container column col-10 col-mx-auto d-flex">

                                <ul className="nav-menu">
                                    <li className="nav-menu-item d-flex"><a className="nav-menu-link col-mx-auto" href="#home">HOME</a></li>
                                    <li className="nav-menu-item d-flex"><a className="nav-menu-link col-mx-auto" href="#aboutUs">ABOUT US</a></li>
                                    <li className="nav-menu-item d-flex"><a className="nav-menu-link col-mx-auto" href="">CALENDAR</a></li>
                                    <li className="nav-menu-item d-flex"><a className="nav-menu-link col-mx-auto" href="">SIRIUS</a></li>
                                    <li className="nav-menu-item d-flex"><a className="nav-menu-link col-mx-auto" href="#contact">CONTACT</a></li>
                                </ul>

                            </div>

                            <div className="column container sites-container d-flex">

                                
                                <span className="line-decoration"></span>

                                <div className="columns social-networks">
                                    <a className="column col-4 d-inline-block" href="">{this.igLogo}</a>
                                    <a className="column col-4 d-inline-block" href="">{this.twtLogo}</a>
                                    <a className="column col-4 d-inline-block" href="">{this.fbLogo}</a>
                                </div>
                                
                                <div className="company-logo">
                                        <a className="d-inline-block" href="">{this.threeDLogo}</a>
                                        <span className="d-inline-block">
                                            &reg; Powered by <br/>3Dmensional Group
                                        </span>
                                </div>

                                <span className="line-decoration"></span>
                            
                            </div>
                        </div>


                    </div>
                </div>

            </nav>
        );
    }
}