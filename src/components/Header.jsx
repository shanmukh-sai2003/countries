import React, { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    function handleDarkMode() {
        setDarkMode((prev) => !prev);
    }
    const body = document.querySelector("body");
    const darkImg = document.querySelector("header img");
    darkMode ? body.setAttribute("data-theme", "dark") : body.setAttribute("data-theme", "light");
    return (
        <header>
            <h1>Where in the world?</h1>
            <button className="colorChanger" onClick={handleDarkMode}>
                <img src={require("../images/moon.png")} alt="light-moon"></img>
                Dark Mode
            </button>
        </header>
    );
}

export default Header;