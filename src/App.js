import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import SearchPage from './components/SearchPage/SearchPage'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

function App() {
  return (
    // BEM Method
    <div className="app">
       <Router> 
        <Header />
        <Switch>
         <Route path="/search">
              <SearchPage/>
          </Route>
          <Route path="/">
             <Home />
          </Route>
         
        </Switch>

        <Footer />
      </Router>



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
