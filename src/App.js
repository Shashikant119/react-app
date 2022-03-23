import {Header} from './MyComponents/Header';

import './App.css';
import Footer from './MyComponents/Footer';
import { Body } from './MyComponents/Body';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import {Java} from './MyComponents/Java';
import {Javascript} from  './MyComponents/Javascript';

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import  Blog  from './MyComponents/Blog';
import Student from './MyComponents/Student';
import Products from './MyComponents/Products';
import Product from './MyComponents/Product';
import Hpart from './MyComponents/Hpart';
import Regster from './MyComponents/Regster';
import Tictactoe from './MyComponents/Tictactoe';

function App() {
  return (
    <>
    <Header title="My App"/>
    <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/java" element={<Java />} />
        <Route path='/users' element={<Javascript />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/student" element={<Student />} />
        <Route path="/products-list" element={< Products/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/hpart" element={<Hpart/>} />
        <Route path="/regster" element={< Regster/>} />
        <Route path='/tictactoe' element={<Tictactoe/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
