import * as sidebarActionCreators from "../redux/actions/sidebar"
import * as roomsActionCreators from "../redux/actions/rooms"
import * as roomActionCreators from "../redux/actions/room"
import * as authActionCreators from "../redux/actions/auth"
import * as profileActionCreators from "../redux/actions/profile"


import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";


export const useSidebarActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(sidebarActionCreators, dispatch)
}

export const useRoomsActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(roomsActionCreators, dispatch)
}

export const useRoomActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(roomActionCreators, dispatch)
}

export const useAuthActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(authActionCreators, dispatch)
}

export const useProfileActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(profileActionCreators, dispatch)
}