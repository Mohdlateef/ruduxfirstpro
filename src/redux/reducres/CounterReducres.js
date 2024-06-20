import { DECRESE, INCREASE, RESET } from "../Action/actionType";


let intial=0;
const counterReducer=(state ,action)=>{

    switch(action.type){
        case INCREASE:{
             return state+1;
        }
        case DECRESE:{
            return state-1;
        }
        case RESET:{
            return 0;
        }
        default:{
            return intial;
        }
    }

}

export default counterReducer;