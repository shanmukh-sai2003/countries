import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import Card from "./Card";
import NoCountryFound from "./NoCountryFound";
import DetailedCard from "./DetailedCard";

function App() { 
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://restcountries.com/v3.1/all`);
    const [homeClicked, setHomeClicked] = useState(false);
    const [isCardClicked, setIsCardClicked] = useState(false);
    const [singleCountry, setSingleCountry] = useState([]);
    function fetchInfo() {
        return fetch(url).then(response => response.json()).then(data => setData(data));
    }

    useEffect(() => {
        fetchInfo();
    }, [url]);

    useEffect(() => {
        home();
    }, [homeClicked]);  

    function regionClick(region) {
        setUrl(`https://restcountries.com/v3.1/region/${region}`);
    }

    function searchSubmit(name) {
        setUrl(`https://restcountries.com/v3.1/name/${name}`);
    }
    
    function home() {
        setHomeClicked(false);
        setUrl(`https://restcountries.com/v3.1/all`);
    }

    function homeClick() {
        setHomeClicked((prev) => !prev);
    }

    function handleCardClick(code) {
        setSingleCountry(data.filter((country) => country["cca3"] === code));
        cardClick();
    }

    function cardClick() {
        setIsCardClicked(prev => !prev);
    }
    return (
        <div>
            <Header></Header>

            {isCardClicked ? singleCountry.map((country) => {
                    return <DetailedCard
                        key = {country["cca3"]}
                        id = {country["cca3"]}
                        name = {country["name"]["official"]}
                        nativeName = {country["name"]["nativeName"]}
                        image = {country["flags"]["png"]}
                        capital = {country["capital"]}
                        region = {country["region"]}
                        subRegion = {country["subregion"]}
                        population = {country["population"]}
                        borderCountries = {country["borders"]}
                        tld = {country["tld"]}
                        currencies = {country["currencies"]}
                        languages = {country["languages"]}
                        back = {cardClick}
                    ></DetailedCard>
                }) : 
            
                <div>
                    <SearchSection 
                        filterClick={regionClick}
                        searchSubmit={searchSubmit}
                    ></SearchSection>

                    {data["status"] ? <NoCountryFound home={homeClick}></NoCountryFound> 
                        : <div className="mainBody">
                            {
                                data.map((country, index) => {
                                return <Card
                                            key={country["cca3"]}
                                            id={country["cca3"]}
                                            image={country["flags"]["png"]}
                                            countryName={country["name"]["official"]}
                                            population={country["population"]}
                                            region={country["region"]}
                                            capital={country["capital"]}
                                            cardClick={handleCardClick}
                                        ></Card>
                                })
                            }
                        </div>
                    }
                </div> 
            }
        </div>
    )
}

export default App;
