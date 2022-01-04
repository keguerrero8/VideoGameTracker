function SearchBar({ search, onSearch, setSearchGames}) {

    function handleChange(event) {
        onSearch(event.target.value)
        fetch(`https://api.rawg.io/api/games?key=d8149d2803d04ff1b5eec3c73b8dbb34&search=${search}&page_size=12`)
        .then((response)=> response.json())
        .then((data)=> setSearchGames(data.results))
    }

    return(
        <div id="search">
            <input id="searchBar" onChange={handleChange} type="text" placeholder="Search..." />
        </div>
    )
}

export default SearchBar