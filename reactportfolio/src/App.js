import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
// import Container from "./components/Container/Container";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
// import Header from "./components/Header/Header";
import NavBar from "./components/NavBarAndLinks/NavBarAndLinks";
import "./App.css";

function App() {

  return (
    <Router>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router >
  )
}

export default App;
