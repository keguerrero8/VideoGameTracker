import React, { useState } from "react"
import GameListCard from "./GameListCard"


function RenderGameListCard({ location, gameList, onDelete, onChange, setOnChange }) {
    const [select, setSelect] = useState("")
    
    let gamesToDisplay = gameList

    function handleSelect(event) {
        setSelect(event.target.value)
    }

    switch (select) {
        case "byTitle": 
            gamesToDisplay = gameList.slice().sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                return 0;
         }); 
            break;
        case "byDate":
            gamesToDisplay = gameList.slice().sort((a, b) => {
                const dateA = a.released;
                const dateB = b.released;
                if (dateA < dateB) {
                return -1;
                }
                if (dateA > dateB) {
                return 1;
                }
                return 0;
            })
    }

    return (
        <>
            <div onChange={handleSelect} className="select" style={{width: "200px"}}>
                <select>
                    <option value="">--Sort Games--</option>
                    <option value="byTitle">By Title</option>
                    <option value="byDate">By Date</option> 
                </select>
            </div>
            {gamesToDisplay.map((game)=> {
                if (game.platforms === null) {
                    return null
                } else { if (game.list === location) {
                    return <GameListCard key={game.name} game={game} onDelete={onDelete} onChange={onChange} setOnChange={setOnChange}/>
                }}
                })}
        </>
    )
}

export default RenderGameListCard