import React  from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar(props) {
    let location = useLocation();
    let nav_items = props.nav_items;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Noty</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {nav_items.map(({ name, link }) => {
                                return (
                                    <li className="nav-item" key={name}>
                                        <Link className={`nav-link ${location.pathname === `${link}` ? "active" : null}`} aria-current="page" to={`${link}`}>{name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar