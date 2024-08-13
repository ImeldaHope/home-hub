import React, { useEffect, useState } from "react";
import './App.css';

import PropertyFilter from "./components/PropertyFilter";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/homehub')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (

    <div>
      <h1>HomeHub</h1>  
      <PropertyFilter properties={properties} />    
    
      <header>
        <NavBar />
      </header>

    </div>
  );
}

export default App;
