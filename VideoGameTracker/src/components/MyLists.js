<<<<<<< HEAD
// game card
// three divs, populate gamecards vertically for each div

// potentially add sort functionality
// rating functionality
import { React, useState} from "react";
=======
import React from "react";
>>>>>>> refs/remotes/origin/main
import GameListCard from "./GameListCard";
import RenderGameListCard from "./RenderGameListCard";

<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/main
function MyLists({ gameList, onDelete, onChange, setOnChange }) {
    
    
    

    return (
        <>
        <div className="gameListContainer">
            <div className="gameList">
                <h2 className="gameListHeader">Wishlist</h2>
<<<<<<< HEAD
                <RenderGameListCard gameList={gameList} location={"Wishlist"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
=======
                {gameList.map((game)=> {
                    if (game.platforms === null) {
                        return null
                    } else { if (game.list === "Wishlist") {
                        return <GameListCard key={game.name} game={game} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                    }}
                })}
>>>>>>> refs/remotes/origin/main
            </div>
            <div className="gameList">
                <h2 className="gameListHeader">Playing</h2>
                <RenderGameListCard gameList={gameList} location={"Playing"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
            </div>
            <div className="gameList">
                <h2 className="gameListHeader">Completed</h2>
                <RenderGameListCard gameList={gameList} location={"Completed"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
            </div>
        </div>
        </>
    )
}

export default MyLists