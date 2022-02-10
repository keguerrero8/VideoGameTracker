import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
    return (
        <Container maxWidth="xl" sx={{mt: "100px"}}>
            <Box sx={{mt: "40px"}}>
                <Typography align="center" color="white" variant="h1" component="h1">Need a way to organize your gaming experience?</Typography>
            </Box>
            <Box maxWidth="sm" sx={{margin: "auto", mt: "50px"}}>
                <Typography align="center" color="white" variant="h5" component="p">VG Tracker is an easy to use app aimed to consolidate your video game collection.  
                From all consoles and genres, VG Tracker will help you find information about any games you have in mind and keep a personal record of your collection.</Typography>
            </Box>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <i className="fab fa-wpexplorer"></i>
                        <div>
                            <hr />
                            <p style={{lineHeight:"1.5"}} > VG Tracker uses 
                            the <a style={{color: "black"}} href="https://rawg.io/apidocs"> RAWG API</a> to fetch
                            multiple details on any video game of your choice.  You may be surprised to find video games from your
                            past. This way no video game from the past or present is left out. Find any game you could think of using 
                            our search engine by typing in a few key words and see what you find! 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <i className="far fa-list-alt"></i>
                        <div>
                            <hr />
                            <p style={{lineHeight:"1.5"}} > Create your own personal backlog of your favorite video games.  Each video game is rendered
                            as a video game card with the option to add the game to three different categories.  Already beat the game? Add it to your
                            "Completed" list.  Currently playing the game? Add it to your "Playing" list. Got a game you want to play but don't
                            have the time right now? Add it to your "Wishlist."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomePage