import React from "react";
import GameContainer from "./GameContainer"

// SearchBar
// GameContainer
    // GameCards
// FormSubmit

function ExplorePage({ games, setGames }) {
    return(
        <div>
        <GameContainer games={games} setGames={setGames}/>
        </div>
    )
}

export default ExplorePage