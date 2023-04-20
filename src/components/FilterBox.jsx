import React, { useState } from "react";

function FilterBox(props) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked((prev) => {
            return !prev;
        });
    }
    return (
        <div className="filterBox">
            <div className="filter" onClick={handleClick}>Filter by Region</div>

            {isClicked && <div className="options">
                <li id="africa"  onClick={(event) => props.regionClicked(event.target.id)}>Africa</li>
                <li id="america" onClick={(event) => props.regionClicked(event.target.id)}>America</li>
                <li id="asia" onClick={(event) => props.regionClicked(event.target.id)}>Asia</li>
                <li id="europe" onClick={(event) => props.regionClicked(event.target.id)}>Europe</li>
                <li id="oceania" onClick={(event) => props.regionClicked(event.target.id)}>Oceania</li>
            </div>}
        </div>
    );
}

export default FilterBox;