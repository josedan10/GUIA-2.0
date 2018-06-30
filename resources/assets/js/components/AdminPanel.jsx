import React from 'react';
import ReactDOM from 'react-dom';

export default class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        };
    }

    isMobile() {
        if (window.innerWidth <= 960) return true;
        else return false;
    }

    handleResize() {
        if (this.isMobile()) this.setState({mobile: true});
        else this.setState({mobile: false});
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }

    render() {

        return (
        <div className="panel admin-panel col-lg-2 fixed bg-secondary">
            <div className="panel-header d-flex">
                <AdminPicture />
                <div className="panel-title text-center">José Daniel Quintero</div>
            </div>
            <div className="panel-body d-flex">
                <Menu mobile={this.state.mobile}/>
            </div>
            <div className="panel-footer">
                <a href="/logout"
                    onClick={() => {event.preventDefault();
                                    document.getElementById('logout-form').submit();}}>
                    Logout<i className="icon icon-logout"></i>
                </a>

                <form id="logout-form" action="/logout" method="POST" style={{display: "none"}}>
                    @csrf
                </form>
            </div>
        </div>
        );
    }
}

class AdminPicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className="avatar avatar-xl" data-initial="JQ">
                {/* @if(false)
                    {{--  Put here the conditional for the user image  --}}
                    <img src="img/avatar-1.png" alt="...">
                @endif */}
            </figure>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menu = (this.props.mobile) ? (
            <ul className="menu">
                <li className="menu-item">
                    <a href="#">
                        <i className="icon icon-2x icon-dashboard"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">                                    
                        <i className="icon icon-2x icon-email"></i><span className="badge" data-badge="3"></span>
                    </a>
                </li>
                <li className="menu-item">                                    
                    <div className="dropdown d-inline-block">
                        <a href="#" className="dropdown-toggle show-lg" tabIndex="0">
                            <i className="icon icon-2x icon-website"></i>
                            <i className="icon icon-caret"></i>
                        </a>
                    
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Nosotros</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>                             
                </li>
                <li className="menu-item">
                    <a href="#">                                    
                        <i className="icon icon-2x icon-edit2"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                    <i className="icon icon-2x icon-calendar"></i>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                    <i className="icon icon-2x icon-users"></i>
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="menu">
                <li className="menu-item">
                    <a href="#">
                        <i className="icon icon-2x icon-dashboard"></i> Dashboard
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">                                    
                        <i className="icon icon-2x icon-email"></i> Mensajes<span className="badge" data-badge="3"></span>
                    </a>
                </li>
                <li className="menu-item">                                    
                    <div className="dropdown d-inline-block">
                        <a href="#" className="dropdown-toggle" tabIndex="0">
                            <i className="icon icon-2x icon-website"></i> Website
                            <i className="icon icon-caret"></i>
                        </a>
                    
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Nosotros</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>                             
                </li>
                <li className="menu-item">
                    <a href="#">                                    
                        <i className="icon icon-2x icon-edit2"></i> Sirius
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                    <i className="icon icon-2x icon-calendar"></i> Calendario
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                    <i className="icon icon-2x icon-users"></i> Usuarios
                    </a>
                </li>
            </ul>
        );

        return menu;
    }
}
