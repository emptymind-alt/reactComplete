import React, {  useEffect, useState } from "react";
import './App.css';

const initialData ={
  channel:"otv",
  time:"1month",
   verified:true,
   title:'',
   views:''
};
const Input=({addData,updateList,editableList})=>{
   const[data,setData]=useState(initialData)
    const handleChange = (e) => {
        e.preventDefault();
    
         setData({ ...data, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if(editableList){
       updateList(data)
        }
        else{
        addData(data);
        }
        setData(initialData)
      };
      useEffect(()=>{
        if(editableList){
          setData(editableList);
        }
        
      },[editableList])
    return(
        <>
        
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="enter title"
          value={data.title}
          
        />

        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="enter views"
         value={data.views}
        />

        <button className="but"type="submit">{editableList?'edit':'Add'}</button>
      </form>

        </>
    )
}
export default Input;