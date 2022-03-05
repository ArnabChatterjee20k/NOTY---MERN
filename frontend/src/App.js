// importing css
import './App.css';

// importing packages
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

// importing functions and components
import ComponentsList from './components/ComponentsList';
import Alert from './components/Alert';

// Importing objects from contexts
import NoteState from "./Context/Notes/NoteState"
import ModalState from './Context/Modal/modalState';
import FormState from './Context/Forms/FormState';

function App() {
  let nav_items = ComponentsList();
  return (
    <>
      <FormState>
        <ModalState>
          <NoteState>
            <div>
              <Router>
                <div className="App">
                  <Navbar nav_items={nav_items} />
                  <Alert category={"danger"} message={"Deleted"} />
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
        </ModalState>
      </FormState>
    </>
  );
}

export default App;
