import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Botton from "./components/Botton";
import Footer from "./components/Footer";
import { GlobbalStyle } from "./components/globalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from './components/Products'
import {infoData, productData} from './components/Products/Data'
import Registrer from "./components/Register";



function App() {
  return (
    <Router>
      <GlobbalStyle/>
        <Hero />
        <Products heading='Escoje tu favorita' data={productData}/>
        
        <Navbar/>
        <Registrer/>
        <Footer/>
        
    </Router>
  );
}

export default App;


//<Products heading='Informacion Personal' data={infoData}/>