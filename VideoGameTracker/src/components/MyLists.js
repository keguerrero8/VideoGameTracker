import React from "react";
import GameListCard from "./GameListCard";
import RenderGameListCard from "./RenderGameListCard";

function MyLists({ gameList, onDelete, onChange, setOnChange }) {
    
    
    

    return (
        <>
        <div className="gameListContainer">
            <div className="gameList">
                <h2 className="gameListHeader">Wishlist</h2>
                <RenderGameListCard gameList={gameList} location={"Wishlist"} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
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