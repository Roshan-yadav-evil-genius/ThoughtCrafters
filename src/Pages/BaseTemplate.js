import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Organisms/Navbar'
import Footer from '../Organisms/Footers/Footer'

const BaseTemplate= () => {
  return (
    <>
      <header><Navbar/></header>
      <main>
        <Outlet />
      </main>
      <footer><Footer/></footer>
    </>
  )
}

export default BaseTemplate