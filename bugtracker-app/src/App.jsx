import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './logsStore'
import { Routes, Route } from 'react-router-dom'
import Upload from './components/Upload.jsx'
import Logs from './components/Logs.jsx'
import Navbar from './Navbar.jsx'
function App() {
 

  return (
    <>
      
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Upload/>}></Route>
          <Route path='/logs' element={<Logs/>}></Route>

          
        </Routes>
      </Provider>
      
    </>
  )
}

export default App
