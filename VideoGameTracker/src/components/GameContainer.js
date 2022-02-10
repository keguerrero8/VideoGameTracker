import { React, useState } from "react";
import GameCard from "./GameCard";
import SearchBar from "./SearchBar"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function GameContainer({ games, onChangeGameList}) {
    const [searchGames, setSearchGames] = useState([])
    const [sort, setSort] = useState({
        releaseDate: false,
        alphabet: false
    })

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function handleClick() {
        fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&page=${getRandomInt(100)}&page_size=12`)
        .then((response)=> response.json())
        .then((data)=> setSearchGames(data.results))
    }

    function handleRadioSort (event) {
        setSort({
            ...sort,
            [event.target.name === "releaseDate" ? "releaseDate" : "alphabet"] : true,
            [event.target.name === "releaseDate" ? "alphabet" : "releaseDate"] : false
        })
    }
    const gamesToDisplay = searchGames.length === 0 ||  searchGames[0].slug.startsWith("grand") && searchGames[1].slug.startsWith("the-w") ? games : searchGames
    let sortedList = gamesToDisplay
    if (sort.alphabet === true) {
        sortedList = [...gamesToDisplay].sort((a, b) =>  (a.name > b.name) ? 1 : -1)
    } 
    else if (sort.releaseDate === true) {
        sortedList = [...gamesToDisplay].sort((a, b) => (b.released > a.released) ? 1 : -1)
    }

    return (
        <div>
            <SearchBar setSearchGames={setSearchGames}/>
            <div style={{textAlign: "center", marginBottom: "15px"}}>
                <p style={{color: "white"}}>Sort Games:</p>
                <input type="radio" name="releaseDate" value="releaseDate" onChange={handleRadioSort} checked={sort.releaseDate}/>
                <label style={{color: "white"}}>By Release </label>
                <input type="radio" name="alphabet" value="alphabet" onChange={handleRadioSort} checked={sort.alphabet}/>
                <label style={{color: "white"}}>By Title</label>
            </div>
            <div id="loadGames">
                <Button id="loadGamesButton" color="error" variant="contained" sx={{marginTop : "10px"}} onClick={handleClick}>Load More Games</Button>
            </div>
            <Container maxWidth="xl" sx={{mt: "20px"}}>
                <Grid container spacing={6}>
                    {sortedList.map((game)=>{
                        if (game.platforms === null) {
                            return null
                        } else {
                            return (
                                <Grid item xs={3} key={game.name}>
                                    <GameCard game={game} onChangeGameList={onChangeGameList}/>
                                </Grid>                          
                            )
                        }
                    })}
                </Grid>
            </Container>
            {/* <div className="cards">
                {sortedList.map((game)=>{
                    if (game.platforms === null) {
                        return null
                    } else {
                        return (<GameCard key={game.name} game={game} onChangeGameList={onChangeGameList}/>)
                    }
                })}
            </div> */}
        </div>
)};

export default GameContainer;