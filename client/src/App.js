import './App.css';
import React from 'react'
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'; 
import AboutPage from './Pages/AboutPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import SwipePage from './Pages/SwipePage';
import LikesPage from './Pages/LikesPage';
import MapPage from './Pages/MapPage';


function App() {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch('/me').then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setUser(user))
  //     }
  //   })
  // }, [])

  return (
    <div>
      <NavBar />
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/swipe' element={<SwipePage />} />
          <Route path='/likes' element={<LikesPage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </BrowserRouter>

     
    








    </div>
  )
}

export default App