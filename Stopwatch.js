import React,{useState,useEffect} from "react";
import './App.css';

const Stopwatch=()=>{
    const[isRunning,setIsRunning]=useState(false);
    const[timer,setTimer] = useState(0);

    useEffect(()=>{
        let interval;
        if(isRunning){
        interval = setInterval(()=>{
          setTimer(prevTimer=>prevTimer+1);
        },1000)
    }
    return()=>{
        clearInterval(interval);
    }
    },[isRunning]);

  //start function
  const clickStart = ()=>{
    setIsRunning(true);
  };
  //stop
  const clickStop = ()=>{
    setIsRunning(false);
  };
  //reset
  const clickReset = ()=>{
    setIsRunning(false);
    setTimer(0);
  };
  const calculateTimer =(seconds)=>{
    const minute = Math.floor(seconds/60);
    const remainTime = seconds % 60;
    return `${String(minute).padStart(2,'0')}:${String(remainTime).padStart(2,'0')}`
  }
  return(
    <>
    <h1>STOPWATCH</h1>
    <p>{calculateTimer(timer)}</p>
    <button className="start" onClick={clickStart}>start</button>
    <button className="stop" onClick={clickStop}>stop</button>
    <button className="reset" onClick={clickReset}>reset</button>
    </>
  );

};

export default Stopwatch;