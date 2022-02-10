import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RenderGameListCard from "./RenderGameListCard";

function MyLists({ gameList, onDelete, onChange, setOnChange }) {
    
    
    

    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    <Grid item xs={4}>
                        <h2 className="gameListHeader">Wishlist</h2>
                        <RenderGameListCard gameList={gameList} location={"Wishlist"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="gameListHeader">Playing</h2>
                        <RenderGameListCard gameList={gameList} location={"Playing"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className="gameListHeader">Completed</h2>
                        <RenderGameListCard gameList={gameList} location={"Completed"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MyLists