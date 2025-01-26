import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/index.jsx'
import {Settings, Summary} from './sections'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<App/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='summary' element={<Summary/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
