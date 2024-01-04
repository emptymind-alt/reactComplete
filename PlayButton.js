import React,{useState} from "react";
import './App.css';

const PlayButton=({onPlay,onPause,children})=>{
     const[playing,setPlaying]=useState(false);
    function handleClick(){
       
        if(playing) onPause()
        else onPlay();
    setPlaying(!playing);
    }
    return(
        <>
        <button onClick={handleClick}>{children}:{playing?'▶️':'⏸️'}</button>
        </>
    )
}
export default PlayButton;