import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Count = () => {
    var  [count,setcount] = useState(0)

    const IncBtn =()=. {
        <console .log("dec clicked")
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography>Counter value: {count}</Typography>
        <Button variant='contained' color='success' onClick={incBtn}>+</Button>
        <Button variant='contained' color='error' onClick={decBtn}>-</Button>

    </div>
  )
}

export default Count