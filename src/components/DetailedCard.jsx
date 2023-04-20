import React from "react";

function DetailedCard(props) {
    return (
        <div className="detailedCard">
            <button className="backBtn" onClick={props.back}>Back</button>
            <div className="country">
                <div className="flag"><img src={props.image} alt="flag"></img></div>
                <div className="details">
                    <h2>{props.name}</h2>
                    <div className="table">
                        <div className="col">
                            <p><span>Native Name: </span>{props.nativeName[Object.keys(props.nativeName)[0]]["official"]}</p>
                            <p><span>population: </span>{props.population}</p>
                            <p><span>Region: </span>{props.region}</p>
                            <p><span>Sub Region: </span>{props.subRegion}</p>
                            <p><span>Capital: </span>{props.capital}</p>
                        </div>
                        <div className="col two">
                            <p><span>Top Level Domain: </span>{props.tld}</p>
                            <p><span>Currencies: </span>{props.currencies[Object.keys(props.currencies)[0]]["name"]}</p>
                            <p><span>Languages: </span>{props.languages[Object.keys(props.languages)[0]]}</p>
                        </div>
                    </div>
                    {props.borderCountries && <div className="borders">
                            <span>Border Countries: </span>
                            {props.borderCountries.map((code) => {
                                return <span className="code">{code}</span>
                            })}
                        </div>
                        }
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;