import './App.css';
import Navbar from './Components/Menu/menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Clinic from './Components/Clinic/Clinic';
import Welcome from './Components/Welcome/Welcome';
import Doctor from './Components/Doctor/Doctor';

function App() {
  return (
  <Router basename='/Vet'>
    <div className='App'>
    <Clinic/>
     <Navbar/>
     <Welcome/>
     <Doctor/>
    <Routes>
      <Route exact path='/' element={<></>}/>
  </Routes>
  </div>
  </Router>
  );
}

export default App;
