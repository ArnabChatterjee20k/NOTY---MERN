import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import NoteState from "./Context/Notes/NoteState"
import ComponentsList from './components/ComponentsList';
import Alert from './components/Alert';

function App() {
  let nav_items = ComponentsList();
  return (
    <>
      <NoteState>
        <div>
          <Router>
            <div className="App">
              <Navbar nav_items={nav_items} />
              <Alert category={"danger"} message={"Deleted"}/>
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
        </div>
      </NoteState>
    </>
  );
}

export default App;
