import React from "react";

// render games to card

function GameCard({ game }) {
console.log(game)
    return (
        <card>
            <h3>{game.name}</h3>
            <img src={game.background_image} />
        </card> 

    )
}


export default GameCard;