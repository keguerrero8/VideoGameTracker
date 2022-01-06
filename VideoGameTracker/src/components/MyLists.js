// game card
// three divs, populate gamecards vertically for each div

// potentially add sort functionality
// rating functionality
import React from "react";
import GameListCard from "./GameListCard";

function renderGameListCard(listChoice) {

}

function MyLists({ gameList, onDelete, onChange, setOnChange }) {
    return (
        <>
        <div style={{textAlign : "center"}}>
            <h1 style={{color : "white"}}>Video Game Tracker</h1>
        </div>
        <div className="gameListContainer">
            <div className="gameList">
                <h2 className="gameListHeader">Wishlist
                    {/* <div className="gameListSelect" style={{width: "200px"}}>
                        <select>
                            <option value="">--Sort Games--</option>
                            <option value="Wishlist">Wishlist</option>
                            <option value="Playing">Playing</option>
                            <option value="Completed">Completed</option>   
                        </select>
                    </div> */}
                </h2>
                {gameList.map((game)=> {
                    if (game.platforms === null) {
                        return null
                    } else { if (game.list === "Wishlist") {
                        return <GameListCard key={game.name} game={game} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    }}
                })}
            </div>
            <div className="gameList">
                <h2 className="gameListHeader">Playing</h2>
                {gameList.map((game)=> {
                    if (game.list === "Playing") {
                        return <GameListCard key={game.name} game={game} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    }
                })}
            </div>
            <div className="gameList">
                <h2 className="gameListHeader">Completed</h2>
                {gameList.map((game)=> {
                    if (game.list === "Completed") {
                        return <GameListCard key={game.name} game={game} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    }
                })}
            </div>
        </div>
        </>
    )
}

export default MyLists