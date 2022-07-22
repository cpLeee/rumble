import './App.css';
import React from 'react'
import {Routes, Route, Links} from 'react-router-dom';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage';




function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App