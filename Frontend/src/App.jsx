import React from 'react'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App