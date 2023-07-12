import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Organisms/Navbar';
import Footer from '../Organisms/Footers/Footer';
import OurService from '../Organisms/OurService/OurServices';
import PortfolioWeb from '../Organisms/Portfolio/PortfolioWeb';
import About from '../Organisms/About/About';
import Footers from '../Organisms/Contact/Contact';



const BaseTemplate= () => {
  return (
    <>
      <header><Navbar/></header>
      <main>
      
        <Outlet />
        <OurService/>
        <PortfolioWeb/>
        <About/>
        <Footers/>
      </main>
      <footer><Footer/></footer>
    </>
  )
}

export default BaseTemplate ;

