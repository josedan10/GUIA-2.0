import React from 'react';

export default class MenuAdmin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul className="menu">
                <li className="menu-item">
                    <a href="/admin">
                        <i className="icon icon-2x icon-dashboard"></i> 
                        <span className="hide-md"> Dashboard</span>
                    </a>
                </li>
                <li className="menu-item">                                    
                    <div className="dropdown d-inline-block">
                        <a href="#" className="dropdown-toggle" tabIndex="0">
                            <i className="icon icon-2x icon-website"></i> 
                            <span className="hide-md"> Website</span>
                            <i className="icon icon-caret"></i>
                        </a>
                    
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="/admin/website/home">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="/admin/website/nosotros">Nosotros</a>
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
                        <span className="hide-md"> Sirius</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                    <i className="icon icon-2x icon-calendar"></i>
                    <span className="hide-md"> Calendario</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/admin/users">
                    <i className="icon icon-2x icon-users"></i>
                    <span className="hide-md"> Usuarios</span>
                    </a>
                </li>
            </ul>
        );
    }
}
