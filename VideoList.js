import React from "react";
import Counter from "./Counter";
import PlayButton from "./PlayButton";

const VideoList=({dataList,deleteList,editList})=>{


return(
    <>
    <div className="main">
    {dataList.map((list) => (
        <Counter
          key={list.id}
          title={list.title}
          views={list.views}
          channel={list.channel}
          time={list.time}
          verified={list.verified}
          id={list.id}
          deleteList={deleteList}
          editList={editList}
        >
           <PlayButton
          onPause={()=>console.log("pause",list.title)}
          onPlay={()=>console.log("play",list.title)}
        >
          {list.title}
        </PlayButton>
        </Counter>
      ))}
      </div>

    </>
)
}
export default VideoList;