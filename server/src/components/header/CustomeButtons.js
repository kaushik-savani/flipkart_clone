import { Box, Button, Typography, styled, } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './LoginDialog';
import { useState, useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';


const CustomeButtons = () => {
  const [open, setOpen] = useState(false);
  const {accountName,setAccountName} = useContext(DataContext);

  const OpenDialog = () =>{
    setOpen(true);
  }

  return (
    <Component>
      {
        accountName ? <Profile accountName={accountName} setAccountName={setAccountName}/>
        :<LoginButton variant='contained' onClick={OpenDialog}>
          Login
        </LoginButton>
      }
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <Box component='span' style={{display: 'flex'}}>
          <ShoppingCartIcon style={{width: '20', marginTop:'2px'}}/>
          <CartTycpography>Cart</CartTycpography>
      </Box>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Component>
  )
}

export default CustomeButtons


const Component = styled(Box)`
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-around;
    & > p {
        font-size: 15px;
        font-weight: 600;
    }
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    border-radius: 2px;
    box-shadow: none;
    padding: 5px 40px;
    font-weight: 600;
    height: 30px;
`
const CartTycpography = styled(Typography)`
  font-weight: 600;
  font-size: 15px;
  margin: 2px;
`