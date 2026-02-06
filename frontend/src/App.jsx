import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
 import Menu from './pages/Menu.jsx'
// import Pages from './pages/Pages.jsx'
// import Contact from './pages/Contact.jsx'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
         <Route path='/' element={<Menu/>}/> 
        {/* <Route path='/pages' element={<Pages/>}/> */}
        {/* <Route path='/contact' element={<Contact/>}/> */}
        {/* <Route path='/book' element={<Book/>}/> */}
      </Routes>
    </div>
  );
}