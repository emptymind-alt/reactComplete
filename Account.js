import React, { useState } from "react";

const Account=()=>{
    const[acount,setAcount]=useState({amount:0});
    const[value,setValue]=useState(0);

    function increment(){
        setAcount({amount:acount.amount+1});
    }
    
    function decrement(){
        setAcount({amount:acount.amount-1});
    }
    
    function incrementByValue(value){
        setAcount({amount:acount.amount+value});
    }

    return(
        <>
        <div className="container">
            <h2>Account details</h2>
            <h3>Amount:{acount.amount}</h3>
            <button onClick={increment}>increment+</button>
            <button onClick={decrement}>decrement-</button>
            <input type="text" onChange={(e)=>setValue(+e.target.value)}></input>
            <button onClick={()=>incrementByValue(value)} >incrementBy${value}</button>

            </div>
        </>
    )
}
export default Account;