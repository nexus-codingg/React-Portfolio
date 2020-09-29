import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import "./App.css";

function App() {

  return (
    <Router>
      <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router >
  )
}

export default App;
