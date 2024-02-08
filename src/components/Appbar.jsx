import { AppBar,Button,Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div>
       <AppBar>
        <Toolbar>
            <Typography>FIRST APP</Typography>&nbsp;&nbsp;&nbsp;
<Button variant="contained" color='success'>log in</Button>
<Button variant="contained" color='error'>sign up</Button>
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Appbar