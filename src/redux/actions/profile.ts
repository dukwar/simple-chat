import {profileACType} from "./types";
import {SET_PROFILE} from "../constants";
import {profileType} from "../reducers/types";

export const setProfile = (profile:profileType):profileACType => {
    return {
        type: SET_PROFILE,
        profile
    }
}