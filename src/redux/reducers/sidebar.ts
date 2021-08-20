import {
    SET_EXPAND_SIDEBAR,
    SET_MOBILE_SIDEBAR,
    SET_OPEN_MOBILE_SIDEBAR,
    SET_OPEN_SIDEBAR
} from "../constants";
import {sidebarACType} from "../actions/types";


const initialState = {
    sidebarIsOpen: true,
    mobileSidebar: false,
    isOpenMobile: false
}

type initialStateType = typeof initialState

const sidebar = (state = initialState, action: sidebarACType): initialStateType => {

    switch (action.type) {
        case SET_OPEN_SIDEBAR:

            return {
                ...state,
                sidebarIsOpen: action.isOpen
            }

        case SET_EXPAND_SIDEBAR:

            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
            }

        case SET_MOBILE_SIDEBAR:

            return {
                ...state,
                mobileSidebar: action.isMobile
            }

        case SET_OPEN_MOBILE_SIDEBAR:
            return {
                ...state,
                isOpenMobile: !state.isOpenMobile
            }


        default:
            return state
    }
}

export default sidebar