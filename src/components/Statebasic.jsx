import { Button, Typography } from '@mui/material'
import { padding } from '@mui/system'
import React, { useState } from 'react'

const Statebasic = () => {
    // var fnmae = 'rauf'
    var[fname,setfnmae] =useState("joseph")
    const changename = ()=>{
        console.log("cliked")
        setfnmae("shafi")
    }
          return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h4'>WELCOME {fname}</Typography>
    <Button variant= "contained"onClick={changename}>change </Button>
    </div>
  )
}

export default Statebasic