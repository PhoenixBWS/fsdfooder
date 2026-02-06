import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from './pages/Menu.jsx'
import Pages from './pages/Blog/Blog.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Book from './pages/Book.jsx'
import BlogPost from './pages/BlogPost/BlogPost.jsx'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/blog-post' element={<BlogPost/>}/>
      </Routes>
    </div>
  );
}