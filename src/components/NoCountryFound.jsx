import React from "react";

function NoCountryFound({home}) {
    
    return (<div className="noCountryFound">
        <h2>No country Found</h2>
        <p>Please check another country name</p>
        <button onClick={home}>Home</button>
    </div>);
}

export default NoCountryFound;