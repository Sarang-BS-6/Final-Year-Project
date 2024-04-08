import React from 'react'
import  ReactDOM  from 'react-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home.jsx';
import Upload from './components/upload/Upload.jsx';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <React.Fragment>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
      </Routes> 
    </React.Fragment>  
  );
}

export default App;