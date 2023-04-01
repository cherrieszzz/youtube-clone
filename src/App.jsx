import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from "@mui/material";

import ChannelDetail from "./components/ChannelDetail";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";


export default function App() {
    return (
        <BrowserRouter>
            <Box>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Feed />}/>
                    <Route exact path='/video/:id' element={<VideoDetail />}/>
                    <Route exact path='/channel' element={<ChannelDetail />}/>
                    <Route exact path='/search/:searchTerm' element={<SearchFeed />}/>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}
