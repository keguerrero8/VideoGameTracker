import { React, useState } from "react";
import GameCard from "./GameCard";
import SearchBar from "./SearchBar"

function GameContainer({ games, setGames, gameList, onChangeGameList}) {
    const [search, setSearch] = useState("")
    const [searchGames, setSearchGames] = useState([])
    
    console.log(search)
    const gamesToDisplay = search === "" ? games : searchGames 

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function handleClick() {
        fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&page=${getRandomInt(100)}&page_size=10`)
        .then((response)=> response.json())
        .then((data)=> setGames(data.results))
    }

    return (
        <div>
            <SearchBar search={search} onSearch={setSearch} setSearchGames={setSearchGames}/>
            <div id="loadGames">
                <button id="loadGamesButton" onClick={handleClick} >Load More Games</button>
            </div>
            <div className="cards">
                {gamesToDisplay.map((game)=> <GameCard key={game.name} game={game} gameList={gameList} onChangeGameList={onChangeGameList}/> )}
            </div>
        </div>

)};

export default GameContainer;