import React, { useEffect, useState } from 'react'
import {Header, Footer} from '../'
import { Outlet } from 'react-router'
import { DarkModeContextProvider } from '../../context'

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

  return (
    <>
        <DarkModeContextProvider value={{darkMode, setDarkMode}}>
          <Header/>
          <Outlet/>
        </DarkModeContextProvider>
        <Footer/>
    </>
  )
}

export default Layout