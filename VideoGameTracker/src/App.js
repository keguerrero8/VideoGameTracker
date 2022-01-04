import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import ExplorePage from "./components/ExplorePage";

// NavBar
// HomePage
// ExplorePage
// MyList

//set up routes here

// manage lists from here

function App() {
  const [games, setGames] = useState([])


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(()=> {
    fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&page=${getRandomInt(100)}&page_size=10`)
    .then((response)=> response.json())
    .then((data)=> {
      setGames(data.results)
      console.log(data.results)
    })
  }, []);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/explore">
        <ExplorePage games={games} setGames={setGames}/>
        </Route>
        <Route exact path="/myLists">
        <h1 style={{color: "white"}}>My Lists</h1>
        </Route>
        <Route exact path="/">
        <h1 style={{color: "white"}}>Home</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
