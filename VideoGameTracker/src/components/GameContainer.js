import { React, useState } from "react";
import GameCard from "./GameCard";
import SearchBar from "./SearchBar"

<<<<<<< HEAD

// GameCard

function GameContainer({ games, setGames, onChangeGameList}) {
    const [search, setSearch] = useState("")
=======
function GameContainer({ games, gameList, onChangeGameList}) {
>>>>>>> refs/remotes/origin/main
    const [searchGames, setSearchGames] = useState([])
    
    const gamesToDisplay = searchGames.length === 0 ||  searchGames[0].slug.startsWith("grand") ? games : searchGames
    

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    function handleClick() {
        fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&page=${getRandomInt(100)}&page_size=12`)
        .then((response)=> response.json())
        .then((data)=> setSearchGames(data.results))
    }

    return (
        <div>
            <SearchBar setSearchGames={setSearchGames}/>
            <div id="loadGames">
                <button id="loadGamesButton" onClick={handleClick} >Load More Games</button>
            </div>
            <div className="cards">
                {gamesToDisplay.map((game)=>{
                    return (<GameCard key={game.name} game={game} onChangeGameList={onChangeGameList}/>
                )})}
            </div>
        </div>
)};

export default GameContainer;