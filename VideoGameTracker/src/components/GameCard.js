import React, { useState } from "react";

function GameCard({ game, onChangeGameList }) {
    const [ seeDetails, setSeeDetails ] = useState(false)
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

    function handleSeeDetails () {
        setSeeDetails(!seeDetails)
    }

    if (seeDetails === true) {
        return (
            <article className="card">
                <h3>{game.name}</h3>
                <img src={game.background_image} />
                <button className="seeDetails" onClick={handleSeeDetails}> Hide Details</button>
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
                <select className="selectBox" onChange={handleChange} name="lists" id="list-select">
                    <option value="">--Add to list--</option>
                    <option value="Completed">Completed</option>
                    <option value="Playing">Playing</option>
                    <option value="Wishlist">Wishlist</option>
                </select>
            </article>  
        )
    }
    else {
        return (
            <article className="card">
                <h3>{game.name}</h3>
                <img src={game.background_image} />
                <button className="seeDetails" onClick={handleSeeDetails}> See Details</button>
                <select className="selectBox" onChange={handleChange} name="lists" id="list-select">
                    <option value="">--Add to list--</option>
                    <option value="Completed">Completed</option>
                    <option value="Playing">Playing</option>
                    <option value="Wishlist">Wishlist</option>
                </select>
            </article>
        )
    }
}


export default GameCard;