import React from "react";

export default function Body(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            
            <img src ={`${props.image}`} alt="swim" className="card--img"/>
            <div className="card--stats">
                <img src="./img/Star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}