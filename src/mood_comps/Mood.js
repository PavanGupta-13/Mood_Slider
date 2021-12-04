import React,{useState} from 'react'
import './Mood.css'

function Mood({printVal}) {


    return (
        <div className="Mood">
            <input style={{width:"80%"}} type="range" id="mood_val" name="mood_val" min="10" max="100" onChange={printVal} step="0.01"></input>
            {/* <div style={{width:"50px", height:"100px" ,backgroundColor:(state <5 ? "black" : "red")}}></div> */}
        </div>
    )
}

export default Mood
