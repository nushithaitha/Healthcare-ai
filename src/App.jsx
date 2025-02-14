import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HOME';
import Navbar from './components/Navbar';
import About from './pages/About';
import Features from './pages/Features';
import Login from './pages/Login';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import Mydelivery from './pages/mydelivery'
import Header from './components/header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='features/:functions' element={<Features />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='myprofile' element={<MyProfile />} />
        <Route path='mydelivery' element={<Mydelivery />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
