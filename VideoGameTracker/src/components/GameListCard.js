import React from "react";


function GameListCard({ game }) {
console.log(game)
    return (
        <article className="card">
            <h3>{game.name}</h3>
            <img src={game.background_image} />
            <p>Release Date: {game.released}</p>
            <h4 style={{textDecoration: "underline"}}>Consoles:</h4>
            {game.platforms.map((platform) => {
                return <p className="consoles" key={platform.platform.name}>{platform.platform.name}</p>
            })}
        </article>  
    )
}


export default GameListCard;