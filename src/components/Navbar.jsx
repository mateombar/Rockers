import React from 'react';
import './styles/Navbar.css';
class Navbar extends React.Component{
    render(){
        return(
            <header className="navbar">
                <a className="icon" href="/">
                    <span className="icon_logo"><i className="fas fa-chess-rook"></i></span>
                    <span className="icon_title">Tower</span>
                </a>
                <ul className="views">
                    <li className="view_item"><a href="/badges">Badges</a></li>
                    <li className="view_item"><a href="/about">About</a></li>
                </ul>
                <a className="hamburger">
                    <i className="fas fa-bars"></i>
                </a>
            </header>
        )
    }
}

export default Navbar;