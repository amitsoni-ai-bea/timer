import React, { useState, useRef } from "react";

const Timer = () =>{

    const [timer, setTimer] = useState(0);
    const [now, setNow]= useState(0);
    let recorTime = useRef(null);;

    const timerStartHandler = () =>{
       recorTime.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1);
            setNow(prevNow => prevNow + 1);
            console.log(`Timer: ${timer}`);
            console.log(`Now: ${now}`);
        }, 1000);
    }

    const timerPauseHandler = () =>{
        clearInterval(recorTime.current);
    }
    return (
        <>
        <p>Timer: {timer}</p>
        <button onClick={timerStartHandler}>Start</button>
        <button onClick={timerPauseHandler}>Pause</button>   
        <button onClick={timerStartHandler}>Resume</button>
        </>
    );
}

export default Timer;