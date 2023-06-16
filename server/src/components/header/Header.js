import React from 'react'
import {AppBar, Box, Toolbar, Typography, styled} from "@mui/material"
import Search from './Search'
import CustomeButtons from './CustomeButtons'


const StyleAppbar = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Box)`
    margin-left: 13%;
    line-height: 0;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    marginLeft: 2
})


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyleAppbar>
        <Toolbar style={{minHeight:55}}>
            <Component>
                <img src={logoURL} alt="Flipkart" style={{width:75}}/>
                <SubHeading>
                    Explore&nbsp;
                    <Box component='span' style={{color: '#FFE500'}}>
                        Plus
                        <PlusImage src={subURL} alt="plus"/>
                    </Box>
                </SubHeading>
            </Component>
            <Search/>
            <CustomeButtons/>
        </Toolbar>
    </StyleAppbar>
  )
}

export default Header