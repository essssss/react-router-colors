import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Routes from "./Routes";

function App() {
    const [colors, setColors] = useState([
        { name: "red", code: "rgb(255,0,0)" },
        { name: "green", code: "rgb(0,255,0)" },
        { name: "blue", code: "rgb(0,0,255)" },
    ]);
    const addColor = (newColor) => {
        setColors((colors) => [...colors, { ...newColor }]);
    };
    const colorLinks = colors.map((color) => (
        <>
            <NavLink key={color.name} to={`/colors/${color.name}`}>
                {color.name}
            </NavLink>
            <br />
        </>
    ));
    return (
        <div className="App">
            <BrowserRouter>
                <Link to={"/colors/new"}>Add a new color!</Link>
                <br />
                {colorLinks}
                <Routes colors={colors} addColor={addColor} />
            </BrowserRouter>
        </div>
    );
}

export default App;
