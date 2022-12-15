import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './components/Home'


import "./App.css"
import CSEAI from './components/CSEAI'
import ECE from './components/ECE'
import EEE from './components/EEE'
import IT from './components/IT'
import MECH from './components/MECH'
import CIVIL from './components/CIVIL'
import Admin from './components/Admin'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path="/it" exact element={<IT />} />
        <Route path="/cse" exact element={<CSEAI />} />
        <Route path="/ece" exact element={<ECE />} />
        <Route path="/eee" exact element={<EEE />} />
        <Route path="/mech" exact element={<MECH />} />
        <Route path="/civil" exact element={<CIVIL />} />
        <Route path="/admin" exact element={<Admin />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
