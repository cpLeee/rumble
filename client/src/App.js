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

// USER 
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])


  // MENTOR CARDS
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/mentors")
      .then((resp) => resp.json())
      .then((mentorsArray) => {
        console.log(mentorsArray)
        setMentors(mentorsArray);
      });
  }, []);

 

  return (
    <div>
      <NavBar
      user={user} setUser={setUser} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />

          <Route path='/signup' element={<SignUpPage 
          onSignUp={setUser} />} />

          <Route path='/login' element={<LoginPage onLogin={setUser}/>} />
          
          <Route path='/profile' element={<ProfilePage 
          user={user}/>} />

          <Route path='/swipe' element=
          {<SwipePage 
          mentors={mentors}
          user={user} />} />

          <Route path='/likes' element={<LikesPage
          user={user} />} />

          <Route path='/map' element={<MapPage
          user={user} />} />
        </Routes>
      </BrowserRouter>

     
    








    </div>
  )
}

export default App