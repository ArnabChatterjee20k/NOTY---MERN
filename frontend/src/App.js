import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import NoteState from "./Context/Notes/NoteState"

function App() {
  // an array of object contains info about different components.
  const nav_items = [{ name: "Home", link: "/", component: <Home/> }, { name: "About", link: "/about", component: <About/> }] // it will be used as props in navbar to make set navitems and links
  return (
    <>
      <NoteState>
        <Router>
          <div className="App">
            <Navbar nav_items={nav_items} />
            <Switch>
              {nav_items.map(({ name , link, component }) => {
                return (
                  <Route path={`${link}`} exact key={name}>
                    {component}
                  </Route>
                )
              })}

            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
