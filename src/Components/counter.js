import React from "react";

import { useDispatch,useSelector } from "react-redux";
import { decrease, incrase, reset } from "../redux/Action/counterAction";
const Counter=()=>{

 let state=useSelector((state)=>{
    console.log(state)
    return state;
})
const dispatch=useDispatch();
    return(
        <div>
        <h3>{state}</h3>
        <button onClick={()=>{
            console.log("abc")
            dispatch(incrase())
        }}>inc</button>
        <button onClick={()=>{
            dispatch(decrease())
        }}>dec</button>
        <button onClick={()=>{
            dispatch(reset());
        }}>reset</button>

        </div>
    )
}

export default Counter;