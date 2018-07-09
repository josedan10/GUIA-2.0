import React from 'react';

export default class MenuAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: false
        };
    }

    isResponsive() {
        if (window.innerWidth <= 960) return true;
        else return false;
    }

    handleResize() {
        if (this.isResponsive()) this.setState({responsive: true});
        else this.setState({responsive: false});
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
        this.handleResize();
    }

    render() {
        let menu = (this.props.responsive) ? (
            <ul className="menu">
                <li className="menu-item">
                    <a href="/admin">
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
                        <a href="#" className="dropdown-toggle" tabIndex="0">
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
                    <a href="/admin/users">
                    <i className="icon icon-2x icon-users"></i>
                    </a>
                </li>
            </ul>
        ) : (
            <ul className="menu">
                <li className="menu-item">
                    <a href="/admin">
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
                    <a href="/admin/users">
                    <i className="icon icon-2x icon-users"></i> Usuarios
                    </a>
                </li>
            </ul>
        );

        return menu;
    }
}
