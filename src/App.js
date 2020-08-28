import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Switch, Router, Route} from 'react-router-dom'

function App() {
  return (
    // BEM Method
    <div className="app">
        <Header/>
        <Home/>
        <Footer/>


        {/* Home */}
          {/* Header */}
          {/* Banner */}
            {/* search */}
          {/* Card */}
          {/* footer */}
        {/* Search Page */}
    </div>
  );
}

export default App;
