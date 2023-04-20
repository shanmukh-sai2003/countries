import React, { useState } from "react";
import FilterBox from "./FilterBox";

function SearchSection(props) {
    const [search, setSearch] = useState("");
    function handleChange(e) {
        setSearch(e.target.value);
    }
    function handleKeyPress(e) {
        if(e.key === "Enter") {
            props.searchSubmit(search);
        }
    }
    return (
        <div className="searchSection">
            <div className="searchBar">
                <div><img src={require("../images/search.png")} alt="search"></img></div>
                <div className="inputDiv">
                    <input type="text" onChange={handleChange} onKeyDown={handleKeyPress} placeholder="Search for a country..."></input>
                </div>
            </div>
            <FilterBox regionClicked={props.filterClick}></FilterBox>
        </div>
    );
}

export default SearchSection;