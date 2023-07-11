import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import one from '../../assets/one.jpeg';
import MovieItem from '../Movies/MovieItem';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api/api';


const Homepage = () => {
    const [movies,SetMovies] = useState([]);
    useEffect(() => {
        getAllMovies().then((data)=> SetMovies(data.movies))
                    .catch((error)=> console.log(error))
    },[]) 
  return <Box width={'100%'} height={'100%'} margin={'auto'} marginTop={2}>
    <Box margin={'auto'} width={'80%'} height={'40%'} padding={2}>
        <img src={one} alt='one' 
        width={'100%'}
        height={'100%'}/>
    </Box>
    <Box padding={5} margin={'auto'}>
        <Typography variant='h4' textAlign={"center"} sx={{color:'#900C3F'}}>Latest Releases</Typography>
    </Box>
    <Box display={'flex'} width={'100%'} justifyContent={'center'} flexWrap={'wrap'}>
        {movies && movies.map((movie,index)=> (
        <MovieItem id={movie.id} 
        title={movie.title} 
        posterUrl={movie.posterUrl} 
        releaseDate={movie.releaseDate} 
        key={index} />
        ))} 
    </Box>
    <Box display={'flex'} padding={5} margin={'auto'}>
        <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:'auto',color:"#2b2d42"}}>
            View All Movies
        </Button>
    </Box>
  </Box> 
}

export default Homepage;
