import React, {useState} from 'react';
import {IconButton, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState();
    const navigate = useNavigate();
    const onhandleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm) {
            navigate(`search/${searchTerm}`);
        }

        setSearchTerm('');
    }

    return (
        <Paper
            component='form'
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius:'30',
                border:'1px solid #e3e3e3',
                pl:2,
                boxShadow:'none',
                mr:{sm:5}
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <SearchIcon />
            </IconButton>

        </Paper>
    );
}

export default SearchBar;