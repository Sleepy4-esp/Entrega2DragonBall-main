import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import FilterPage from './Pages/FilterPage/FilterPage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Acercade from './Pages/Acercade/Acercade'


const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/filter/:gender' element={<FilterPage/>}/>
          <Route path='/details/:id' element={<DetailsPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/filter/Acercade' element={<Acercade/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

