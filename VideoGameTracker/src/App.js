import './App.css';
import { useEffect, useState } from 'react';
import ExplorePage from "./components/ExplorePage";

// pull data from api

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
    .then((data)=> setGames(data.results))
  }, []);

  return (
    <div className="App">
      <ExplorePage games={games} setGames={setGames}/>
    </div>
  );
}

export default App;
