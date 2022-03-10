import React from 'react'
import Navbar from '../Components/Menu/menu';
import Clinic from '../Components/Clinic/Clinic';
import Welcome from '../Components/Welcome/Welcome';
import Doctor from '../Components/Doctor/Doctor';
import Tips from '../Components/Tips/Tips';

export default function Home() {
  return (
    <>
      <Clinic/>
     <Navbar/>
     <Welcome/>
     <Doctor/>
     <Tips/>
     </>
  )
}
