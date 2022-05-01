import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
//import {Link, Route, Routes} from 'react-router-dom';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} /> 
          {/* <Link path="/" /> */}
        </Routes>
        <Footer/>

        {/* <Contact /> */}
    </div>
  );
}

export default App;
