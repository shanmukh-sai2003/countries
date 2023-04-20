import React from "react";

function Card(props) {
    
    return (
        <div className="card" id={props.id} onClick={() => props.cardClick(props.id)}>
            <img src={props.image} alt="flag"></img>
            <div>
                <h2>{props.countryName}</h2>
                <p><span>Population: </span>{props.population}</p>
                <p><span>Region: </span>{props.region}</p>
                <p><span>Capital: </span>{props.capital}</p>
            </div>
        </div>
    );
}

export default Card;