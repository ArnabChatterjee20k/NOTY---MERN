import { Link, useLocation } from 'react-router-dom'
function Offcanvas(props) {
    let location = useLocation();
    let nav_items = props.nav_items;
    return (
        <>
            <div class="offcanvas offcanvas-start bg-dark text-light" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">NOTY</h5>
                    <button style={{filter:"invert(1)"}} type="button" class="btn-close text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {nav_items.map(({ name, link }) => {
                            return (
                                <li className="nav-item fs-5" key={name}>
                                    <Link className={`nav-link ${location.pathname === `${link}` ? "active" : null}`} aria-current="page" to={`${link}`}>{name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Offcanvas