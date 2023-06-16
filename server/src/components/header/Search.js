import styled from '@emotion/styled'
import { Box, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled(Box)`
    background: #FFFFFF;
    width: 30%;
    height: 35px;
    margin-left: 12px;
    border-radius: 2px;
    display: flex;
`
const SearchInput = styled(InputBase)`
    width: 100%;
    margin-left: 15px;
    font-size: 14px;
`
const SearchIconWrapper = styled(SearchIcon)`
    color: #2874f0;
    margin: 6px;
`

const Search = () => {
  return (
    <SearchBar>
        <SearchInput placeholder='Search for products,brands ande more'/>
        <SearchIconWrapper/>
    </SearchBar>
  )
}

export default Search