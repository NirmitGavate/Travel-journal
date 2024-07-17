import React from "react"
import Navbar from "./Navbar"
import Place from "./Place"
import Data from "../Data"
export default function Card(){
    let cards=Data.map(item=>{
        return(
            <Place 
            key={item.id}
            {...item}
            />
        )
    })
    return(
        <div className="card">
        <Navbar />
        <section>
            {cards}
        </section>
        </div>
    )
}