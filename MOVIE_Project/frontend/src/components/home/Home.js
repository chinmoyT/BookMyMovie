import React from 'react';
import movieImage from '../../assets/movieImage.jpeg';
import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${movieImage})` }}>
      <header>
        <h1>Welcome to BookMyMovie</h1>
      </header>

      <section>
        <div className="cta-container">
          <h2>Book your movie tickets now!</h2>
          <p>Explore the latest movies and enjoy a seamless booking experience.</p>
          <br/>
          <br/>
          <div className="cta-buttons">
            <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:'auto', color: 'red'}}>
                All Movies
            </Button>
            <Button LinkComponent={Link} to="/homepage" variant='outlined' sx={{margin:'auto',color:"red"}}>
                Book Now
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;