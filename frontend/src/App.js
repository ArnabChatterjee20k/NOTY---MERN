import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import NoteState from "./Context/Notes/NoteState"

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>

              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/about" exact>
                <About />
              </Route>

            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
