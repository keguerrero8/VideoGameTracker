import React, { useState } from "react";
import SwitchButton from "./SwitchButton";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function GameListCard({ game, onDelete, onChange, setOnChange}) {
    const [ seeDetails, setSeeDetails ] = useState(false)

    function handleClick() {
        fetch(`http://localhost:3000/games/${game.id}`, {
                method: "DELETE"});
        onDelete(game.id)
    }

    function handleSeeDetails () {
        setSeeDetails(!seeDetails)
    }

    if (seeDetails === true) {
        return (
            <article className="gameListCard">
                {/* <button className="deleteButton" onClick={handleClick}>Remove From List</button> */}
                <Button color="error" variant="contained" sx={{marginTop : "10px"}} onClick={handleClick}>Remove From List </Button>
                <div>
                    <h3 className="gameListCardTitle" >{game.name}</h3>
                </div> 
                <img className="gameListCardImage" src={game.background_image} />
                {/* <button className="gameListSeeDetails" onClick={handleSeeDetails}> Hide Details</button> */}
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
                <SwitchButton game={game} onChange={onChange} setOnChange={setOnChange}/>
            </article>  
        )
    }
    else {
        return (
            <article className="gameListCard">
                <Button color="error" variant="contained" sx={{marginTop : "10px"}} onClick={handleClick}>Remove From List </Button>
                {/* <button className="deleteButton" onClick={handleClick}>Remove From List</button> */}
                <div>
                    <h3 className="gameListCardTitle" >{game.name}</h3>
                </div> 
                <img className="gameListCardImage" src={game.background_image} />
                <Button variant="contained" sx={{marginTop : "10px"}} onClick={handleSeeDetails}>See Details</Button>
                {/* <button className="gameListSeeDetails" onClick={handleSeeDetails}> See Details</button> */}
                <Container>
                    <SwitchButton game={game} onChange={onChange} setOnChange={setOnChange}/>
                </Container>
            </article>
        )
    }
}

export default GameListCard;