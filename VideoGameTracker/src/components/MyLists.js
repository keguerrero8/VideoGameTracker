// game card
// three divs, populate gamecards vertically for each div

// potentially add sort functionality
// rating functionality
import React from "react";
import GameListCard from "./GameListCard";

function MyLists({ gameList }) {
    return (
        <>
        <div style={{textAlign : "center"}}>
            <h1 style={{color : "white"}}>Video Game Tracker</h1>
            <p style={{color : "white"}}>3 columns corresponding to 3 categories for games</p>
        </div>
        <div>
            <div>
                <h2 style={{color : "white"}}>Completed</h2>
                {gameList.map((game)=> {
                    if (game.list === "Completed") {
                        return <GameListCard key={game.name} game={game}/>
                    }
                })}
            </div>
            <div>
                <h2 style={{color : "white"}}>Playing</h2>
                {gameList.map((game)=> {
                    if (game.list === "Playing") {
                        return <GameListCard key={game.name} game={game}/>
                    }
                })}
            </div>
            <div>
                <h2 style={{color : "white"}}>Wishlist</h2>
                {gameList.map((game)=> {
                    if (game.list === "Wishlist") {
                        return <GameListCard key={game.name} game={game}/>
                    }
                })}
            </div>
        </div>
        </>
    )
}

export default MyLists