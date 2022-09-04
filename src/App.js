import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Recipes from './pages/recipes';
import About from './pages/about';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
