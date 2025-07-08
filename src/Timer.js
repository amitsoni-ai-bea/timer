import React, { useState, useRef } from "react";

const Timer = () =>{

    const [timer, setTimer] = useState(0);
    const [label, setLabel] = useState("Start");
    let recordTime = useRef(null);

    const timerStartHandler = () =>{
       recordTime.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1);
            console.log(`Timer: ${timer}`);
        }, 1000);
    }

    const timerPauseHandler = () =>{
        clearInterval(recordTime.current);
    }
// Function to change the label and start/pause the timer
// This function toggles the label between "Start" and "Pause"
    const changerFuncLabel=()=>{
        if(label === "Start"){
            setLabel("Pause");
            timerStartHandler();
        }else if(label === "Pause"){
            setLabel("Start");
            timerPauseHandler();
        }
    }
    return (
        <>
        <p>Timer: {timer}</p>
        <button onClick={changerFuncLabel}>{label}</button>
        </>
    );
}

export default Timer;