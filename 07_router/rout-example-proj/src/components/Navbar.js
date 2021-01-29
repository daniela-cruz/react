import React from 'react';

//Routing:
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    //Take us to the about section after 2 seconds from whichever section we are:
    // setTimeout(() => {
    //     props.history.push('./about')
    // }, 2000)

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Company Name of Sorts</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);