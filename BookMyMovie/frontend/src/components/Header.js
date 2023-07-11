import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Tab, Tabs, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { getAllMovies } from './api/api';


const Header = () => {
  const dummyArray =["Adipursh","Spy","Animal","Flash"]
  const [value, setValue] = useState(0)
  const [movies, setMovies] = useState([])
  useEffect(()=> {
      getAllMovies()
      .then((data)=> setMovies(data.movies))
      .catch((error)=> console.log(error))
  },[])
  return (
    <AppBar position='sticky' sx={{bgcolor:'#900C3F'}}>
        <Toolbar>
          <Box>
          <h1>BookMyMovie</h1>
          </Box>
        <Box> 
          <div style={{ fontSize: '2rem' }}>🎬</div>
        </Box>

            <Box width={'20%'} margin={'auto'}>
              <Autocomplete 
                freeSolo
                options={movies && movies.map((option) => option.title)}
                renderInput={(params) => <TextField
                  sx={{input:{color:'white'}}} 
                  variant='standard' {...params} 
                  placeholder="Search Movies " />}
              />
            </Box>
            <Box display={'flex'}>
                <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                  <Tab LinkComponent={Link} to='/homepage' label='Home'/>
                  <Tab LinkComponent={Link} to='/movies' label='Movies'/>
                  <Tab LinkComponent={Link} to='/login' label='User Login' />
                </Tabs>
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Header;