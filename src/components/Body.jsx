import React from "react";

export default function Body(props){
    return(
        <div className="card">
            <img src="./img/image 12.png" alt="swim" className="card--img"/>
            <div className="card--stats">
                <img src="./img/Star.png" className="card--star"/>
                <span>5.0</span>
                <span className="color">(6) • </span>
                <span className="color">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>
    )
}