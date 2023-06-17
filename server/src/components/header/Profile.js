import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'

const Profile = ({accountName, setAccountName}) => {

    const [open , setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const logoutUser = () =>{
        setAccountName('');
    }

    const handleClose = () => {
        setOpen(false);
      };
    

  return (
    <>
        <Box>
            <Typography onClick={handleClick}>
                {accountName}
            </Typography>
        </Box>
        <Menu
            id="basic-menu"
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                <Typography>Logout</Typography>
            </MenuItem>
      </Menu>
    </>
  )
}

export default Profile