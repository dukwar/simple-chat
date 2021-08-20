import {SET_AUTH} from "../constants";
import {authACType} from "./types";

export const setAuth = (isAuth:boolean):authACType => {
    return {
        type: SET_AUTH,
        isAuth
    }
}