import React from "react";
import GameContainer from "./GameContainer"

// SearchBar
// GameContainer
    // GameCards
// FormSubmit

function ExplorePage({ games, setGames, gameList, onChangeGameList }) {
    return(
        <div>
            <GameContainer games={games} setGames={setGames} gameList={gameList} onChangeGameList={onChangeGameList}/>
        </div>
    )
}

export default ExplorePage