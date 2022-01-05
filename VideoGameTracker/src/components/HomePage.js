import React from "react";

function HomePage() {
    return (
        <>
            <div id="homeContainer" style={{textAlign : "center"}}>
                <h1 id="homeHead" style={{color : "white"}}>Need a way to organize your gaming experience?</h1>
                <p id="appDescribe" style={{color : "white"}}>VG Tracker is an easy to use app aimed to consolidate your video game collection.  
                From all consoles and genres, VG Tracker will help you find information about any games you have in mind and keep a personal record of your collection. </p>

            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <i class="fab fa-wpexplorer"></i>
                        <div>
                            <hr />
                            <p style={{lineHeight:"1.5"}} > VG Tracker uses 
                            the <a style={{color: "black"}} href="https://rawg.io/apidocs"> RAWG API</a> to fetch
                            multiple details on any video game of your choice.  You may be surprised to find video games from your
                            past. This way no video game from the past or present is left out. Find any game you could think of using 
                            our search engine by typing in a few key words and see what you find! 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <i className="far fa-list-alt"></i>
                        <div>
                            <hr />
                            <p style={{lineHeight:"1.5"}} > Create your own personal backlog of your favorite video games.  Each video game is rendered
                            as a video game card with the option to add the game to three different categories.  Already beat the game? Add it to your
                            "completed" list.  Currently playing the game? Add it to your "currently playing" list. Got a game you want to play but don't
                            have the time right now? Add it to your "wishlist."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage