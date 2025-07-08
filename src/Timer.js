import React, { useState, useRef } from "react";

const Timer = () =>{

    const [timer, setTimer] = useState(0);
    let recordTime = useRef(null);;

    const timerStartHandler = () =>{
       recordTime.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1);
            console.log(`Timer: ${timer}`);
        }, 1000);
    }

    const timerPauseHandler = () =>{
        clearInterval(recordTime.current);
    }
    return (
        <>
        <p>Timer: {timer}</p>
        <button onClick={timerStartHandler}>Start</button>
        <button onClick={timerPauseHandler}>Pause</button>   
        </>
    );
}

export default Timer;