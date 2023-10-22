import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/About/About"
import Responsibility from "./pages/Responsibility/Responsibility"
import Buybañatex from "./pages/Buybañatex/Buybañatex"
import Bañayarn from "./pages/Bañayarn/Bañayarn"
import Blog from "./pages/Blogs/Blogs"
import News from "./pages/News/News"
import Faqs from "./pages/FAQs/FAQS"
import Contact from "./pages/Contactus/Contactus"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path= "/responsibility" element={<Responsibility />} />
        <Route path= "/buybañatex" element={< Buybañatex />} />
        <Route path= "/bañayarn" element={<Bañayarn />} />
        <Route path= "/blog" element={<Blog />} />
        <Route path="/News" element={<News />} />
        <Route path= "/Faqs" element={< Faqs />} />
        <Route path= "/contact" element={<Contact />} />

      
       
       
        
       
       
        

      </Routes>
    </Router>
  );
}

export default App;
