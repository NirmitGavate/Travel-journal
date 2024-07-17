import React from "react"
export default function Place(props) {
   return(
    <div className="place">
        <div className="place-img">
        <img src={`images/${props.coverImg}`} />
        </div>
        <div className="place-info">
            <img className="pin" src="images/location.svg" />
           <span>{props.country}</span>
           <span className="maps">view on Google Maps</span>
           <h2 className="place-name">{props.location}</h2>
           <p>{props.date}</p>
           <p className="place-desc">{props.desc}</p>
        </div>

    </div>
   )
}