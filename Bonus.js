import React,{useState} from "react";

const Bonus=()=>{
    const[bonus,setBonus]=useState({points:0});

    const increment=()=>{
        setBonus({points:bonus.points+1});
    }
    return(
        <>
        <div className="card">
            <h2>Bonus Counter</h2>
            <p>Point:{bonus.points}</p>
            <button onClick={increment}>increment+</button>
            </div>
        </>
    )
}
export default Bonus;