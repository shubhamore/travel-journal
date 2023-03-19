import React from "react"
import data from "./data"
import Section from "./Section"

const sec=data.map(x=><Section {...x} />)

export default function App(){
    return(
        <div className="App">
            <header>
                <img src={require("./img/globe.png")}></img>
                <h3>my travel journal.</h3>            
            </header>
            {sec}
        </div>
    )
}