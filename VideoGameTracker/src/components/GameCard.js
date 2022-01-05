import React from "react";
import GameListCard from "./GameListCard";

// render games to card

function GameCard({ game, onChangeGameList }) {
    function handleChange(event) { 
        const newGame = {
            name: game.name,
            background_image: game.background_image,
            released: game.released,
            list: event.target.value,
            platforms: game.platforms
        }

        fetch("http://localhost:3000/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGame)
        })
        .then((response)=> response.json())
        .then((data) => onChangeGameList(data))
    }

    return (
        <article className="card">
            <h3>{game.name}</h3>
            <img src={game.background_image} />
            <p>Release Date: {game.released}</p>
            <h4 style={{textDecoration: "underline"}}>Consoles:</h4>
            {game.platforms.map((platform) => {
                return <p className="consoles" key={platform.platform.name}>{platform.platform.name}</p>
            })}
            <select onChange={handleChange} name="lists" id="list-select">
                <option value="">--Add to list--</option>
                <option value="Completed">Completed</option>
                <option value="Playing">Playing</option>
                <option value="Wishlist">Wishlist</option>
            </select>
        </article>  
    )
}


export default GameCard;