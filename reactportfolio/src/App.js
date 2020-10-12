import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// when importing files that don't have the default "index.js", 
// make sure to import the full file path and the exact file name 
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import HomePage from './pages/HomePage/HomePage';
import NavBar from "./components/NavBarAndLinks/NavBarAndLinks";
import "./App.css";


function App() {

  return (
    <Router>
        <NavBar />
        <Route exact path= "/Home" component={HomePage} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      <Footer />
    </Router >
  )
}

export default App;
