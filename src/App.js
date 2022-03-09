import './App.css';
import Navbar from './Components/Menu/menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Clinic from './Components/Clinic/Clinic';

function App() {
  return (
  <Router>
    <Clinic/>
  <Navbar/>
  </Router>
  );
}

export default App;
