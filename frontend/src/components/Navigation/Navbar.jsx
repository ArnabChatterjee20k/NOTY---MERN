import React  from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';

function Navbar(props) {
    let location = useLocation();
    let nav_items = props.nav_items;
    const history = useHistory()
    function remove_auth_token(){
        const noty__auth__token = "noty__auth__token" ;
        localStorage.removeItem(noty__auth__token)
        history.push("/login")
        toast.info("Logged Out!")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Noty</Link>
                    <button className="navbar-toggler" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
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
                            <li>
                                <button className='btn btn-outline-info' onClick={remove_auth_token}>LogOut</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar