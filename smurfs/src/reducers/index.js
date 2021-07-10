import { SUCCESS } from "../actions";

const initialState = {
    smurfs: []
}

export const reducer = (state=initialState, action) => {

    switch(action.type){
        case SUCCESS:
            return {
                ...state,
                smurfs:[
                    ...action.payload
                ]
            }
            
        default:
            return state;
    }
}