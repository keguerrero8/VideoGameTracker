import React from "react";
import GameListCard from "./GameListCard";

function MyLists({ gameList, onDelete, onChange, setOnChange }) {
    return (
        <>
        <div className="gameListContainer">
            <div className="gameList">
                <h2 className="gameListHeader">Wishlist</h2>
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