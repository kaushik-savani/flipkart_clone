import { Box, Button, Typography, styled, } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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


const CustomeButtons = () => {
  return (
    <Component>
        <LoginButton variant='contained'>
            Login
        </LoginButton>
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box component='span' style={{display: 'flex'}}>
            <ShoppingCartIcon style={{width: '20', marginTop:'2px'}}/>
            <CartTycpography>Cart</CartTycpography>
        </Box>
    </Component>
  )
}

export default CustomeButtons