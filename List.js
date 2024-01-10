import React,{useContext} from "react";
import ListContext from "../context/ListContext";


const useList=()=>{
   return useContext(ListContext)
}
export default useList;
