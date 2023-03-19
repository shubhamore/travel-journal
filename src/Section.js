import React from "react"

export default function Section(props){
    return(
        <div className="section">
            <img className="section-img" src={props.imageUrl}></img>
            <div className="right">
                <div className="loc">
                    <img src={require("./img/loc.png")}></img>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="section-name">{props.title}</h1>
                <h3 className="section-date">{props.startDate} - {props.endDate}</h3>
                <div className="section-info">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}