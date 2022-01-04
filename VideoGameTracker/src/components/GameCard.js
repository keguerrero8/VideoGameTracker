import React from "react";

// render games to card

function GameCard({ game }) {
    return (
        <article class="card">
            <header>
                <h3>{game.name}</h3>
            </header>
            <img src={game.background_image} />
            <p>{game.released}</p>
            <ul>
                {game.platforms.map((platform) => {
                    return <li key={platform.platform.name}>{platform.platform.name}</li>
                })}
            </ul>
        </article> 

    )
}


export default GameCard;