import React from "react";
import SwitchButton from "./SwitchButton";


function GameListCard({ game, onDelete, onChange, setOnChange}) {

    function handleClick() {
        fetch(`http://localhost:3000/games/${game.id}`, {
                method: "DELETE"});
        onDelete(game.id)
    }

    return (
        <article className="card">
            <h3>{game.name}</h3>
            <button className="deleteButton" onClick={handleClick}>x</button> 
            <img src={game.background_image} />
            <p>Release Date: {game.released}</p>
            <h4 style={{textDecoration: "underline"}}>Consoles:</h4>
            {game.platforms.map((platform) => {
                return <p className="consoles" key={platform.platform.name}>{platform.platform.name}</p>
            })}
            <SwitchButton game={game} onChange={onChange} setOnChange={setOnChange}/>
        </article>  
    )
}


export default GameListCard;