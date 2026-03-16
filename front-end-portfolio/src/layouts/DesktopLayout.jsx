import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from "@tanstack/react-router";
import Breadcrumb from '../components/Breadcrumb';

function DesktopLayout() {
  return (
    <div>
      <header>
        <NavBar />
        <Breadcrumb />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DesktopLayout