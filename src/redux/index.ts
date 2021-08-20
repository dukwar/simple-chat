import {combineReducers} from "redux";
import sidebar from "./reducers/sidebar";
import rooms from "./reducers/rooms";
import room from "./reducers/room";
import auth from "./reducers/auth";
import profile from "./reducers/profile";


const rootReducer = combineReducers({
    sidebar,
    rooms,
    room,
    auth,
    profile
})

export type reducersType = ReturnType<typeof rootReducer>

export default rootReducer