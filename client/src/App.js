import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Nav/NavBar"
import Home from "./components/Home.js";
import AddContact from './components/contacts/AddContact';

function App() {
  return (
    <>
      <div className="NavBar">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AddContact' element={<AddContact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
