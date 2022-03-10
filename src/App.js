import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
  <Router basename='/Vet'>
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
  </Routes>
  </div>
  </Router>
  );
}

export default App;
