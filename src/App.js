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
import Category from './Components/Category/Category';
import { CategoryData } from './Data/CategoryData';
import { VaccinData } from './Data/VaccinData';
import Service from './Components/Service/Service';
import { SpecialData } from './Data/SpecialitateData';
import { StandardData } from './Data/StandardData';
import ScrollToTop from './ScrollToTop';
import About from './Components/About/About';




function App() {
  return (
  <Router basename='/Vet'>
    <ScrollToTop>
    <div className='App'>
    <Clinic/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/servicii' element={<Category categories = {CategoryData}/>}/>
      <Route exact path='/standard' element={<Service categories = {StandardData} title="Servicii generale"/>}/>
      <Route exact path='/specialitate' element={<Service categories = {SpecialData} title="Servicii de specialitate"/>}/>
      <Route exact path='/vaccin' element={<Service categories = {VaccinData} title= "Vaccinuri oferite"/>}/>
      <Route exact path='/about'  element = {<About/>}></Route>
  </Routes>
  <Footer/>
  </div>
  </ScrollToTop>
  </Router>
  );
}

export default App;
