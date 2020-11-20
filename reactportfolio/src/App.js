import React from 'react';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route} from "react-router-dom";
// when importing files that don't have the default "index.js", 
// make sure to import the full file path and the exact file name 
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import About from './pages/About/About';
import Home from "./pages/Home/Home"
import NavBar from "./components/NavBarAndLinks/NavBarAndLinks";
import "./App.css";


function App() {

  return (
    <BreakpointProvider>
    <Router>
        <NavBar />
        <Route exact path= "/React-Portfolio" component={Home} />
        <Route exact path= "/About" component={About} />
        <Route exact path= "/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      <Footer />
    </Router>
    </BreakpointProvider>
  )
}

export default App;
