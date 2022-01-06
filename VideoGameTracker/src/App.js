import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import ExplorePage from "./components/ExplorePage";
import MyLists from "./components/MyLists";


function App() {
  const [games, setGames] = useState([])
  const [gameList, setGameList] = useState([
  {
    id: 1,
    name: "filler"
  }
  ])
  const [onChange, setOnChange] = useState(false)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function onChangeGameList(newGame) {
    console.log(gameList)
    if (gameList.some((game)=> game.name === newGame.name)) {
      return null
    } else {
      return (
        fetch("http://localhost:3000/games", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newGame)
          })
        .then((response)=> response.json())
        .then((data) => setGameList([...gameList, data]))
      )
    }
    
    
    
  }

  function onDelete(id) {
    setGameList(gameList.filter((game)=> game.id !== id)) 
  }

  useEffect(()=> {
    fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&page=${getRandomInt(100)}&page_size=12`)
    .then((response)=> response.json())
    .then((data)=> {
      setGames(data.results)
    })
  }, []);

  useEffect(()=> {
    fetch(`http://localhost:3000/games`)
    .then((response)=> response.json())
    .then((data)=> setGameList(data))
  }, [onChange]);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/explore">
          <ExplorePage games={games} setGames={setGames} onChange={onChange} onChangeGameList={onChangeGameList}/>
        </Route>
        <Route exact path="/myLists">
          <MyLists gameList={gameList} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
