import React from 'react'
import { Outlet } from 'react-router-dom'

const BaseTemplate= () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default BaseTemplate