import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import fact from "./data";
import PlayButton from "./PlayButton";
import Input from "./Input";
import VideoList from "./VideoList";

const App = () => {
  const [dataList, setDataList] = useState(fact);
  const [editableList, setEditableList] = useState(null);

  function addData(data) {
    setDataList([...dataList, { ...data, id: dataList.length + 1 }]);
  }
  function deleteList(id) {
    setDataList(dataList.filter((i) => i.id !== id));
  }
  function editList(id) {
    setEditableList(dataList.find((i) => i.id === id));
  }
  function updateList(data) {
    const index = dataList.findIndex(v=>v.id===data.id);
    const newList = [...dataList]
    newList.splice(index,1,data);
    setDataList(newList);
  }
  return (
    <>
      <VideoList
        dataList={dataList}
        editList={editList}
        deleteList={deleteList}
     
      ></VideoList>
      <Input addData={addData}   updateList={updateList} editableList={editableList}></Input>
    </>
  );
};
export default App;
