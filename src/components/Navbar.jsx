import React from "react";
import {Stack, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <Stack direction="row" alignItems="center" p={2}
               sx={{position: "sticky", background: '#000', top: 0, justifyContent: "space-between"}}>
            <Link to="/" style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" height={45}/>
                <Typography sx={{color:'white', marginLeft:'3px'}} variant='h6'>
                    YoutubeClone
                </Typography>
            </Link>
            <SearchBar/>
        </Stack>
    );
}