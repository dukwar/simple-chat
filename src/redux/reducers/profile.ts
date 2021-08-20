import {profileACType} from "../actions/types";
import {SET_PROFILE} from "../constants";
import {profileType} from "./types";


const initialState = {
    profile: {} as profileType
}


type initialStateType = typeof initialState

const profile = (state = initialState, action: profileACType): initialStateType => {

    switch (action.type) {
        case SET_PROFILE:

            return {
                ...state,
                profile: action.profile

            }

        default:
            return state
    }
}

export default profile