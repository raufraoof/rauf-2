import { Button, Typography } from '@mui/material'
import React from 'react'

Counter = () => {
const Counter = () => {
  return (

    <div style={{paddingTop:"80px"}}>
        <Typography>Counter Value :{count}</Typography>
        <Button variant='contained' color='success'>+</Button>
        <Button variant='contained' color='error'>-</Button>
    </div>
0  )
}

export default Counter