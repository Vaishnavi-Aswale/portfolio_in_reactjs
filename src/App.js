import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <>
    <Router>
      <NavMenu />
      <ScrollToTop />
      <Switch>
        <Route path="/profile"><Profile/></Route>
        <Route path="/projects"><Projects/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
      
    </Router>
    </>
  );
}
