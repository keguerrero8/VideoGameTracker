function SearchBar({setSearchGames}) {

    function handleChange(event) {
        fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&search=${event.target.value}&page_size=40`)
        .then((response)=> response.json())
        .then((data)=> {
            setSearchGames(data.results)
        })
    }

    return(
        <div id="search">
            <input id="searchBar" onChange={handleChange} type="text" placeholder="Search..." />
        </div>
    )
}

export default SearchBar