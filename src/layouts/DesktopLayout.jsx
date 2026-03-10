import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from "@tanstack/react-router";

function DesktopLayout({ children }) {
  return (
    <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />

    </div>
  )
}

export default DesktopLayout