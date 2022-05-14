// importing css
import './App.css';

// importing functions and components
import Navigation from "../src/components/Navigation/Navigation";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <ToastContainer draggable/>
              </div>
            </NoteState>
          </ModalState>
        </FormState>
      
    </>
  );
}

export default App;
