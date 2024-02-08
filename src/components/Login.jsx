import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>

    <br></br><br></br><br></br><br></br>
     <h2>ADMISSION</h2>
    <Typography variant='h4'>Registartion <form action=""></form></Typography><br></br>
    <TextField variant='outlined' type='text' label='username'
    /><br></br>
     <TextField variant='outlined' type='password' label='password'/> <br></br>
     <TextField variant='outlined' label='email'/> <br></br>
    <TextField variant='outlined'type='date' label=''/>" <br></br>
    <TextField variant='outlined' type='number' label='mobile number'/> <br></br>
   
   <button> submit </button></div>
  )
}

export default Login