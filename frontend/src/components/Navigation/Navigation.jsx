import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Offcanvas from "./Offcanvas"
import Navbar from "./Navbar"
import { useContext } from "react"
import ComponentsList from "./ComponentsList"

function Navigation() {
    let nav_items = ComponentsList(); // passing if token is present or not
    return (
        < Router >
            <div className="App">
                <Navbar nav_items={nav_items} />
                <Offcanvas nav_items={nav_items} />
                {/* <Alert category={"danger"} message={"Deleted"} /> */}
                <Switch>
                    {nav_items.map(({ name, link, component }) => {
                        return (
                            <Route path={`${link}`} exact key={name}>
                                {component}
                            </Route>
                        )
                    })}
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation