import {
    ADD_FILE,
    ADD_MESSAGE, DELETE_FILE, DELETE_MESSAGE, EDIT_MESSAGE, SELECT_MESSAGE,
    SET_AUTH, SET_EDIT_STATUS,
    SET_EXPAND_SIDEBAR, SET_FETCHING,
    SET_MOBILE_SIDEBAR,
    SET_OPEN_MOBILE_SIDEBAR,
    SET_OPEN_SIDEBAR, SET_PROFILE, SET_ROOM,
    SET_ROOMS
} from "../constants";
import {isEditType, messageFilesType, messageType, profileType, roomsType, roomType} from "../reducers/types";
import {addMessage} from "./room";

// sidebar

interface setOpenSidebarType {
    type: typeof SET_OPEN_SIDEBAR,
    isOpen: boolean
}

interface setExpandSidebarType {
    type: typeof SET_EXPAND_SIDEBAR,
}

interface setMobileSidebarType {
    type: typeof SET_MOBILE_SIDEBAR,
    isMobile: boolean
}

interface setOpenMobileSidebarType {
    type: typeof SET_OPEN_MOBILE_SIDEBAR
}

export type sidebarACType = setOpenSidebarType | setExpandSidebarType | setMobileSidebarType | setOpenMobileSidebarType

// rooms

interface setRoomsType {
    type: typeof SET_ROOMS,
    rooms: roomsType[]
}

export type roomsACType = setRoomsType

// room

interface setRoomType {
    type: typeof SET_ROOM,
    room: roomType
}

interface addMessageType {
    type: typeof ADD_MESSAGE,
    message: messageType
}

interface selectMessageType {
    type: typeof SELECT_MESSAGE,
    messageId: string
}

interface deleteMessageType {
    type: typeof DELETE_MESSAGE,
    selectMessages: string[]
}

interface setEditStatusType {
    type: typeof SET_EDIT_STATUS,
    payload: isEditType
}

interface editMessageType {
    type: typeof EDIT_MESSAGE,
    message: string,
    files: messageFilesType[]
}

interface addFileType {
    type: typeof ADD_FILE,
    file: messageFilesType,
    // fileType: string
}

interface deleteFileType {
    type: typeof DELETE_FILE,
    fileId: string,
}

interface setFetchingType {
    type: typeof SET_FETCHING,
    isFetching: boolean
}



export type roomACType = setRoomType | addMessageType | selectMessageType | deleteMessageType | editMessageType | setEditStatusType | setFetchingType | addFileType | deleteFileType

// auth
interface setAuthType {
    type: typeof SET_AUTH,
    isAuth: boolean
}

export type authACType = setAuthType

// profile

interface setProfileType {
    type: typeof SET_PROFILE,
    profile: profileType
}

export type profileACType = setProfileType