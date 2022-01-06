import React, { useState } from "react";
import SwitchButton from "./SwitchButton";


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
<<<<<<< HEAD
            <div>
                <article className="gameListCard">
                    <button className="deleteButton" onClick={handleClick}>Remove from List</button> 
                    <h3 className="gameListCardTitle">{game.name}</h3>
                    <img className="gameListCardImage" src={game.background_image} />
                    <button className="gameListSeeDetails" onClick={handleSeeDetails}> Hide Details</button>
                    <div className="cardDetails">
                            <p className="cardRelease">Release Date: {game.released}</p>
                            {game.metacritic ? <p>Metacritic review: {game.metacritic}</p> : null}
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
            </div>           
=======
            <article className="card">
                <h3>{game.name}</h3>
                <button className="deleteButton" onClick={handleClick}>x</button> 
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
                <SwitchButton game={game} onChange={onChange} setOnChange={setOnChange}/>
            </article>  
>>>>>>> refs/remotes/origin/main
        )
    }
    else {
        return (
<<<<<<< HEAD
            <article className="gameListCard">
                <button className="deleteButton" onClick={handleClick}>Remove From List</button>
                <h3 className="gameListCardTitle">{game.name}</h3>
                <img className="gameListCardImage" src={game.background_image} />
                <button className="gameListSeeDetails" onClick={handleSeeDetails}> See Details</button>
=======
            <article className="card">
                <h3>{game.name}</h3>
                <button className="deleteButton" onClick={handleClick}>x</button> 
                <img src={game.background_image} />
                <button className="seeDetails" onClick={handleSeeDetails}> See Details</button>
>>>>>>> refs/remotes/origin/main
                <SwitchButton game={game} onChange={onChange} setOnChange={setOnChange}/>
            </article>
        )
    }
}

export default GameListCard;