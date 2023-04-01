import React, {useEffect, useState} from "react";
import {Stack, Box, Typography} from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import {fetchFromAPI} from "../utils/fetchFormAPI";
export default function Feed() {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [vidoes, setVidoes] = useState();


    useEffect(() => {
        setVidoes(null);
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVidoes(data.items))
    }, [selectedCategory]);

    console.log(vidoes);
    return (

        <Stack
            sx={{
                flexDirection: {
                    sx: 'column',
                    md: 'row'
                }
            }}
        >
            <Box
                sx={{
                    height: {
                        sx: 'auto',
                        md: '92vh'
                    },
                    borderRight: '1px solid #3d3d3d',
                    px: {sx: 0, md: 2}
                }}
            >
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </Box>
            <Box
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2,

                }}
            >
                <Typography>{selectedCategory}</Typography>
                <Videos videos={vidoes}/>
            </Box>
        </Stack>
    );
}