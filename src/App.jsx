import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Moviecard from './components/MovieCard/Moviecard.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Genre from './components/Genre/Genre.jsx'
import MovieInformation from './components/MovieInformation/MovieInformation.jsx'
function App() {

  const[theme, setTheme] = useState('light')

  return (
    <>
      {/* <div className={`cont ${theme}`} >
    
        <Navbar theme={theme} setTheme={setTheme}/>
        <Moviecard />
      </div> */}
      <BrowserRouter >
      <div className={`cont ${theme}`} >
    
      <Navbar theme={theme} setTheme={setTheme}/>
        <Routes >
          <Route path='/moviecard' element={<Moviecard />}/>
          <Route path='/' element={<Genre/>}/>
          <Route path='/movie/:id' element={<MovieInformation theme={theme} setTheme={setTheme}/>}/>
        </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
