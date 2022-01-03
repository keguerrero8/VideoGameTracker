import React from "react";
import GameCard from "./GameCard";

// GameCard

function GameContainer({ games }) {
    
    return (
        <div>
            {games.map((game)=>{
                return (<GameCard key={game.name} game={game}/>
            )})}
        </div>

)};

export default GameContainer;