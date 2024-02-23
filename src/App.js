import './App.css';
import React,{useEffect, useState}from 'react';


function App() {
  const[time,setTime]=useState(0);
  const[isRunning,setIsRunning]=useState(false);
  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId=setInterval(()=>{
        setTime((prevTime)=>prevTime+1)
      },1000);
    }
    else{
      clearInterval(intervalId);
    }
    return()=>clearInterval(intervalId)

  },[isRunning])
  const formatTime=(time)=>{
    let minutes=Math.floor(time/60);
    let sec=Math.floor(time%60);
    return `${minutes}:${(sec<10)?"0":""}${sec}`
  }
  const startStop=()=>{
    setIsRunning(!isRunning)
  }
  const reset=()=>{
    setIsRunning(false);
    setTime(0);
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
