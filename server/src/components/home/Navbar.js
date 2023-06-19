import {navData} from '../../constant/navbar-data.js'
import {Box, Typography, styled} from '@mui/material'

const Navbar = () => {
  return (
    <NavbarStyle>
        {
            navData.map((item,index) => (
                <Container key={index}> 
                    <img src={item.url} alt='item' style={{width: '64px'}}></img>
                    <Text>{item.text}</Text>
               </Container>
               )
            )
        }
    </NavbarStyle>
  )
}

export default Navbar

const NavbarStyle = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;