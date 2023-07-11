import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const labelStyle = {mt: 1, mb:1}
const Loginform = ({onSubmit}) => {
  const [inputs,setInputs] = useState({
    name:"",
    email:"",
    password:""
  })
  const [isSignup, setisSignup] = useState(false)
  const handleChange = (e) =>
  {
    setInputs((prevState)=>({...prevState,
    [e.target.name] : e.target.value,
  }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({inputs})
  }
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={open}>
      <Box sx={{ml:"auto", padding:1}}>
          <IconButton onClick={handleClose}>
            <CloseRoundedIcon />
          </IconButton>
      </Box>
      <Typography variant='h4' textAlign={'center'}>
      {isSignup?"Signup":"Login"}
      </Typography>

        <form onSubmit={handleSubmit}>
          <Box 
          padding={6}
          display={'flex'} justifyContent={'center'} flexDirection={"column"}
          width={400} margin={"auto"}
          alignContent={'center'}>
          {isSignup && ( <> <FormLabel margin="normal" sx={labelStyle}>Name</FormLabel>

            <TextField value={inputs.name} onChange={handleChange}
            variant='standard' type='text' name='name'></TextField> </>)}

            <FormLabel margin="normal" sx={labelStyle}>Email</FormLabel>

            <TextField value={inputs.email} onChange={handleChange}
            variant='standard' type='email' name='email'></TextField>

            <FormLabel margin="normal" sx={labelStyle}>Password</FormLabel>

            <TextField value={inputs.password} onChange={handleChange} 
            variant='standard' type='password' name='password'></TextField>

            <Button sx={{mt:2,borderRadius:10,bgcolor:"green"}} type='submit' 
            fullWidth variant='contained'>{isSignup?"Signup":"Login"}</Button>

            <Button onClick={()=>setisSignup(!isSignup)}
            sx={{mt:2,borderRadius:10}} fullWidth>Switch to  {isSignup?"Login":"Signup"}</Button>
          </Box>
        </form>

    </Dialog>
  )
}

export default Loginform