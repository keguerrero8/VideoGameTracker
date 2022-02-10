import React, { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function GameCard({ game, onChangeGameList }) {
    const [ seeDetails, setSeeDetails ] = useState(false)
    function handleChange(event) { 
        const newGame = {
            name: game.name,
            background_image: game.background_image,
            released: game.released,
            list: event.target.value,
            platforms: game.platforms,
            metacritic: game.metacritic
        }

    onChangeGameList(newGame)
    }

    function handleSeeDetails () {
        setSeeDetails(!seeDetails)
    }

    if (seeDetails === true) {
        return (
            <article className="gameListCard">
                <h3>{game.name}</h3>
                <img className="gameListCardImage" src={game.background_image} />
                {/* <button className="seeDetails" onClick={handleSeeDetails}> Hide Details</button> */}
                <Button variant="contained" sx={{marginTop : "10px"}} onClick={handleSeeDetails}>Hide Details</Button>
                <div className="cardDetails">
                    <p className="cardRelease">Release Date: {game.released}</p>
                    <p>Metacritic review: {game.metacritic}</p>
                    <span style={{textDecoration: "underline"}}>Consoles:</span>
                    {game.platforms.map((platform, i, platforms) => {
                        if (i !== platforms.length-1) {
                            return <em className="consoles" key={platform.platform.id}>{platform.platform.name}, </em>
                        }
                        return <em className="consoles" key={platform.platform.id}>{platform.platform.name} </em>
                    } )}
                </div>
                <Container sx={{mt: "20px", mb: "10px"}}>
                    <select className="selectBox" onChange={handleChange} name="lists">
                        <option value="">--Add to list--</option>
                        <option value="Wishlist">Wishlist</option>
                        <option value="Playing">Playing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </Container>
            </article>  
        )
    }
    else {
        return (
            <article className="gameListCard">
                <h3>{game.name}</h3>
                <img className="gameListCardImage" src={game.background_image} />
                {/* <button className="seeDetails" onClick={handleSeeDetails}> See Details</button> */}
                <Button variant="contained" sx={{marginTop : "10px"}} onClick={handleSeeDetails}>See Details</Button>
                <Container sx={{mt: "20px", mb: "10px"}}>
                    <select className="selectBox" onChange={handleChange} name="lists">
                        <option value="">--Add to list--</option>
                        <option value="Wishlist">Wishlist</option>
                        <option value="Playing">Playing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </Container>
            </article>
        )
    }
}


export default GameCard;