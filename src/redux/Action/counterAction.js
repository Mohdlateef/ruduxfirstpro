import { INCREASE ,DECRESE,RESET } from "./actionType";



export  let incrase=()=>{
 return{
    type:INCREASE,
 }
}
export let decrease=()=>{
    return{
        type:DECRESE,
    }
}

export let reset=()=>{
    return{
        type:RESET,
    }
}