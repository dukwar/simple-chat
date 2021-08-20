import {SET_ROOMS} from "../constants";
import {roomsACType} from "../actions/types";
import {roomsType} from "./types";


const initialState = {
    rooms: [] as roomsType[],
}


type initialStateType = typeof initialState

const rooms = (state = initialState, action: roomsACType): initialStateType => {

    switch (action.type) {
        case SET_ROOMS:

            return {
                ...state,
                rooms: action.rooms
            }

        default:
            return state
    }
}

export default rooms