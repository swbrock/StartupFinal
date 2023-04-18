import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" element={<Home/>}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
