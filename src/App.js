import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Menu/menu';
import Clinic from './Components/Clinic/Clinic';
import Footer from './Components/Footer/Footer';
// import CategoryPage from './Pages/CategoryPage';
import Category from './Components/Category/Category';
import { CategoryData } from './Data/CategoryData';
import { VaccinData } from './Data/VaccinData';
import Service from './Components/Service/Service';



function App() {
  return (
  <Router basename='/Vet'>
    <div className='App'>
    <Clinic/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/servicii' element={<Category categories = {CategoryData}/>}/>
      {/* <Route exact path='/standard' element={<Category categories = {}/>}/> */}
      {/* <Route exact path='/specialitate' element={<Category categories = {}/>}/> */}
      <Route exact path='/vaccin' element={<Service categories = {VaccinData}/>}/>

  </Routes>
  <Footer/>
  </div>
  </Router>
  );
}

export default App;
