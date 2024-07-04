import React from 'react';
import HomePage from './assets/pages/home/HomePage'
import ProfileViewer from './assets/pages/profile/ProfileViewer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //Criando rotas para aplicação web
        <Route path='/' element={<HomePage />}/>
        <Route path='/profile' element={<ProfileViewer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
