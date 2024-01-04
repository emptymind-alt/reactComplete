import React from "react";
import './App.css';
const Counter=({id,title,channel,views,time,verified,children,deleteList,editList})=>{
  return(
    <>
    <div className="container">
      <div className="close" onClick={()=>deleteList(id)}>❎</div>
      <div align="right"className="edit"onClick={()=>editList(id)}>✏️</div>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`}/>
      </div>
      <h2 className="title">{title}</h2>
      <p className="channel">{channel}{verified &&'✅'}</p>
      <div className="views">
        {views}<span>  :   </span>
       {time}</div>
       <div className="button">{children}</div>
      </div>
    </>
  )
}
export default Counter;