import {authACType} from "../actions/types";
import {SET_AUTH} from "../constants";


const initialState = {
    isAuth: false
}


type initialStateType = typeof initialState

const auth = (state = initialState, action: authACType): initialStateType => {

    switch (action.type) {
        case SET_AUTH:

            return {
                ...state,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}

export default auth