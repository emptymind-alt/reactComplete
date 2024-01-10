import React,{useContext} from "react";

import ListDispatchContext from "../context/ListDispatchContext";


const useDispatchList=()=>{
   return useContext(ListDispatchContext)
}
export default useDispatchList;
