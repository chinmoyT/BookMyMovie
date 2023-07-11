import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Homepage from './components/Homepage/Homepage';
import Movies from './components/Movies/Movies'
import Login from './components/Login/Login';
import Home from './components/Home';
import Booking from './components/bookings/Booking'


function App() {
  return (
    <div>
      <Header/>
      <section>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/booking/:id' element={<Booking />}></Route> 
        </Routes>
      </section>

    </div>

  );
}

export default App;
