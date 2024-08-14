import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/homehub')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);
  
  return (
    <div>                 
      <NavBar />  
      <Outlet context={properties}/> 
      <Footer />
    </div>
  );
}

export default App;
