import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../api/api';
import MovieItem from './MovieItem';

const Movies = () => {

  const [movies, setMovies] = useState();
  useEffect(()=> {
    getAllMovies()
    .then((data)=> setMovies(data.movies))
    .catch((error)=> console.log(error))
  },[])

  return <Box margin={"auto"} marginTop={4}>
    <Typography 
    margin={"auto"}
    variant='h4' 
    
    padding={2} 
    width={"40%"}
    textAlign={'center'} 
    bgcolor={"red"} 
    color={'white'}
    >
      Movies
    </Typography>
    <Box width={'100%'} margin="auto" marginTop={10} display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
      {movies && movies.map((movie,index)=> <MovieItem key={index} id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} />)}
    </Box>
  </Box>
}

export default Movies