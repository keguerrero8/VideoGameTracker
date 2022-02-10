import React from "react"
import Button from '@mui/material/Button';

function SwitchButton ({ game, onChange, setOnChange }) {
    
    function handleClick () {
        switch (game.list) {
            case "Wishlist":
                fetch(`http://localhost:3000/games/${game.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        list: "Playing"
                    })})
                setOnChange(!onChange)
                break;
            case "Playing":
                fetch(`http://localhost:3000/games/${game.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        list: "Completed"
                    })})
                setOnChange(!onChange)
        }
    }

    const butttonStyle = {

            textAlign: "center",
            padding: "10px 20px",
            margin: "10px",
            width: "60%",
            borderStyle: "solid",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderColor: "rgba(125, 251, 0, 0.561)",
            cursor: "pointer"
    }
    
    switch (game.list) {
        case "Wishlist": return <Button variant="contained" sx={butttonStyle} onClick={handleClick}>Move to Playing</Button>
        case "Playing": return <Button variant="contained" sx={butttonStyle} onClick={handleClick}>Move to Completed</Button>
        case "Completed": return <Button disableRipple variant="outlined" sx={{...butttonStyle, cursor: "auto"}} onClick={handleClick}>Completed!</Button> 
        // case "Wishlist": return <button className="switchButton" onClick={handleClick}>Move to Playing</button>
        // case "Playing": return <button className="switchButton" onClick={handleClick}>Move to Completed</button>
        // case "Completed": return <button style={{cursor:"auto"}} className="switchButton">   Completed!   </button>
    }
}

export default SwitchButton;