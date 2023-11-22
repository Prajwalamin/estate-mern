import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signout' element={<SignOut/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>

  </Routes>
  </BrowserRouter>
}

export default App