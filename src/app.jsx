import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Recipes from './pages/recipes';
import About from './pages/about';
import Footer from './components/footer';
import colors from './assets/utils/colors';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar
          current={this.current_page}
          pos='sticky'
          color={colors.ny_pink}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
