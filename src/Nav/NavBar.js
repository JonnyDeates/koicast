import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css';

class NavBar extends React.Component {

    render() {
        return (
            <nav className='navbar'>
                {this.props.links.map((link, index) => <li key={index} onClick={() => {
                    window.scrollTo(0, 0);
                    this.forceUpdate();
                }}><Link to={link.to}
                         className={(link.to === this.props.currentActive.pathname) ? 'nav-active' : ''}>{link.name}</Link>
                    {(index!== this.props.links.length-1) ? <div className={`separator`}/> : ''}
                </li>)}
            </nav>
        );
    }
}

export default NavBar;
