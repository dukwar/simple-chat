import {
    SET_EXPAND_SIDEBAR,
    SET_MOBILE_SIDEBAR,
    SET_OPEN_MOBILE_SIDEBAR,
    SET_OPEN_SIDEBAR
} from "../constants";
import {sidebarACType} from "./types";

export const setOpenSidebar = (isOpen:boolean):sidebarACType => {
    return {
        type: SET_OPEN_SIDEBAR,
        isOpen
    }
}

export const setExpandSidebar = ():sidebarACType => {
    return {
        type: SET_EXPAND_SIDEBAR
    }
}

export const setMobileSidebar = (isMobile:boolean):sidebarACType => {
    return {
        type: SET_MOBILE_SIDEBAR,
        isMobile
    }
}

export const setOpenMobileSidebar = ():sidebarACType => {
    return {
        type: SET_OPEN_MOBILE_SIDEBAR,
    }
}