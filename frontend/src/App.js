// importing css
import './App.css';

// importing functions and components
import Navigation from "../src/components/Navigation/Navigation";
import Alert from './components/Alert';

// Importing objects from contexts
import NoteState from "./Context/Notes/NoteState"
import ModalState from './Context/Modal/modalState';
import FormState from './Context/Forms/FormState';


function App() {
  return (
    <>
      
        <FormState>
          <ModalState>
            <NoteState>
              <div>
                <Navigation />
              </div>
            </NoteState>
          </ModalState>
        </FormState>
      
    </>
  );
}

export default App;
