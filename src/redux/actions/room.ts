import {roomACType} from "./types";
import {
    ADD_FILE,
    ADD_MESSAGE, DELETE_FILE,
    DELETE_MESSAGE,
    EDIT_MESSAGE,
    SELECT_MESSAGE,
    SET_EDIT_STATUS,
    SET_FETCHING,
    SET_ROOM
} from "../constants";
import {messageFilesType, messageType, roomType} from "../reducers/types";
import {Dispatch} from "redux";

export const setRoom = (room:roomType):roomACType => {
    return {
        type: SET_ROOM,
        room
    }
}

export const addMessage = (message:messageType):roomACType => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export const selectMessage = (messageId:string):roomACType => {
    return {
        type: SELECT_MESSAGE,
        messageId
    }
}

export const deleteMessage = (selectMessages:string[]):roomACType => {
    return {
        type: DELETE_MESSAGE,
        selectMessages
    }
}


export const setEditStatus = (isEdit:boolean, messageId:string):roomACType => {
    return {
        type: SET_EDIT_STATUS,
        payload: {
            isEdit,
            messageId
        }
    }
}


export const editMessage = (message:string, files:messageFilesType[]):roomACType => {
    return {
        type: EDIT_MESSAGE,
        message,
        files
    }
}


export const addFile = (file:messageFilesType):roomACType => {
    return {
        type: ADD_FILE,
        file,
    }
}

export const deleteFile = (fileId:string):roomACType => {
    return {
        type: DELETE_FILE,
        fileId,
    }
}



export const setFetching = (isFetching:boolean):roomACType => {
    return {
        type: SET_FETCHING,
        isFetching
    }
}


export const getRoom = (request: (url: string) => Promise<roomType | undefined>, name:string ) => async (dispatch:Dispatch<roomACType>) => {
    try {
        dispatch(setFetching(true))
        const res = await request(`/${name}`)
        if (!res) {
            throw new Error(`No rooms found, please try later!`)
        }
        dispatch(setRoom(res))
        dispatch(setFetching(false))

    } catch (e) {
        dispatch(setFetching(false))
        console.log(e)
    }

}