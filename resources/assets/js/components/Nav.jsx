import React from "react";
import ReactSVG from "react-svg";
import Particles from "react-particles-js";
import AnchorLink from "react-anchor-link-smooth-scroll";


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: "",
            igLogo: null,
            twtLogo: null,
            fbLogo: null,
            threeDLogo: null
        };
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            igLogo: <ReactSVG className="svg-container" path="../icons/instagram.svg" />,
            twtLogo: <ReactSVG className="svg-container" path="../icons/twitter.svg" />,
            fbLogo: <ReactSVG className="svg-container" path="../icons/facebook.svg" />,
            threeDLogo: <ReactSVG className="svg-container" path="../icons/3dmensional.svg" />
        });
    }

    handleClick() {

        document.getElementsByTagName('body')[0].classList.toggle('disableScroll');
        this.setState({...this.state, open: (this.state.open != "open") ? "open" : "close"});
    }

    render() {

        let stateMenu = this.state.open;

        return (
            <nav className={"container " + stateMenu}>
                <div className="menu__container">

                <div className="columns">
                    <a className="menu-actions column col-ml-auto" href="javascript:;" onClick={this.handleClick.bind(this)}>
                        <i className="icon-icon-menu"></i>
                        <span>MENU</span>
                    </a>
                </div>

                <div className="columns">
                    <div className={"column show-box " + stateMenu}>

                            <div className="nav-menu-container column col-10 col-mx-auto d-flex">

                                <ul className="nav-menu">
                                    <li className="nav-menu-item d-flex"><AnchorLink onClick={this.handleClick.bind(this)} className="nav-menu-link col-mx-auto" href="#home">HOME</AnchorLink></li>
                                    <li className="nav-menu-item d-flex"><AnchorLink onClick={this.handleClick.bind(this)} className="nav-menu-link col-mx-auto" href="#aboutUs">ABOUT US</AnchorLink></li>
                                    <li className="nav-menu-item d-flex"><AnchorLink onClick={this.handleClick.bind(this)} className="nav-menu-link col-mx-auto" href="">CALENDAR</AnchorLink></li>
                                    <li className="nav-menu-item d-flex"><AnchorLink onClick={this.handleClick.bind(this)} className="nav-menu-link col-mx-auto" href="">SIRIUS</AnchorLink></li>
                                    <li className="nav-menu-item d-flex"><AnchorLink onClick={this.handleClick.bind(this)} className="nav-menu-link col-mx-auto" href="#contact">CONTACT</AnchorLink></li>
                                </ul>

                            </div>

                            <div className="sites-container d-flex">


                                <span className="line-decoration"></span>

                                <div className="social-networks">
                                    <a className="d-inline-block" href="">{this.state.igLogo}</a>
                                    <a className="d-inline-block" href="">{this.state.twtLogo}</a>
                                    <a className="d-inline-block" href="">{this.state.fbLogo}</a>
                                </div>

                                <div className="company-logo">
                                        <a className="d-inline-block" href="">{this.state.threeDLogo}</a>
                                        <span className="d-inline-block">
                                            &reg; Powered by <br/>3Dmensional Group
                                        </span>
                                </div>

                                <span className="line-decoration"></span>

                            </div>
                        </div>

                    </div>
                </div>

                <Particles className={"particles " + stateMenu}
                    params= {{
                        "particles": {
                          "number": {
                            "value": 80,
                            "density": {
                              "enable": true,
                              "value_area": 800
                            }
                          },
                          "color": {
                            "value": "#ffffff"
                          },
                          "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 0,
                              "color": "#000000"
                            },
                            "polygon": {
                              "nb_sides": 5
                            },
                            "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                            }
                          },
                          "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                          },
                          "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "detect_on": "canvas",
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "repulse"
                            },
                            "onclick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                          "modes": {
                            "grab": {
                              "distance": 400,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                            },
                            "repulse": {
                              "distance": 200,
                              "duration": 0.4
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },
                        "retina_detect": true
                      }}
                />

            </nav>
        );
    }
}
