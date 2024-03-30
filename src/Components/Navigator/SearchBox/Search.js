import React from "react";
import SearchSelection from "./SearchSelection";
import '../SearchBox/Search.scss'

class Search extends React.Component {
    state = {
        searchInput: ''
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value="" placeholder="Search" className="searchInput" />
                    <SearchSelection />
                    <button className="searchButton">Search</button>
                </form>
            </div>
        )
    }
}

export default Search;