import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Menu/menu';
import Clinic from './Components/Clinic/Clinic';
import Footer from './Components/Footer/Footer';
function App() {
  return (
  <Router basename='/Vet'>
    <div className='App'>
    <Clinic/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
  </Routes>
  <Footer/>
  </div>
  </Router>
  );
}

export default App;
