import React from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Banner from './components/banner'
import Formations from './components/formations'
import './App.css'

function App() {
  return (
    <main className='w-screen h-screen'>
      <Navbar/>
      <Header/>
      <Banner/>
      <Formations/>
      

    </main>
  )
}

export default App
