import {SET_ROOMS} from "../constants";
import {roomsACType} from "./types";
import {roomsType} from "../reducers/types";
import {Dispatch} from "redux";


export const setRooms = (rooms:roomsType[]):roomsACType => {
    return {
        type: SET_ROOMS,
        rooms
    }
}


export const getRooms = (request: (url: string) => Promise<roomsType[] | undefined>, name:string ) => async (dispatch:Dispatch<roomsACType>) => {
    try {
        const res = await request(`/${name}`)
        if (!res) {
            throw new Error(`No rooms found, please try later!`)
        }
        dispatch(setRooms(res))

    } catch (e) {
        console.log(e)
    }
}