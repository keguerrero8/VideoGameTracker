import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import ExplorePage from "./components/ExplorePage";
import MyLists from "./components/MyLists";


function App() {
  const [games, setGames] = useState([])
  const [gameList, setGameList] = useState([])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function onChangeGameList(newGame) {
    setGameList([...gameList, newGame])
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
  }, []);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/explore">
          <ExplorePage games={games} setGames={setGames} onChangeGameList={onChangeGameList}/>
        </Route>
        <Route exact path="/myLists">
          <MyLists gameList={gameList} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
