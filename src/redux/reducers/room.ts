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
import {roomACType} from "../actions/types";
import {isEditType, messageFilesType, messageType} from "./types";


const initialState = {
    roomName: '',
    avatar: '',
    messages: [] as messageType[],
    messageFiles: [] as messageFilesType[],
    selectedMessages: [] as string[],
    isEdit: {} as isEditType,
    isFetching: false
}

type initialStateType = typeof initialState

const selectMessages = (selectedMessages: string[], messageId: string) => {
    const equalId = selectedMessages.some((id) => id === messageId)

    return !equalId
        ? [...selectedMessages, messageId]
        : [...selectedMessages]
            .filter((item) => item !== messageId)
}

const deleteMessages = (messages: messageType[], selectedMessages: string[]) => {

    return messages.filter(({id}) => {
        for (let selectId of selectedMessages) {
            if (id === selectId) {
                return false
            }
        }
        return true
    })
}

const editMessage = (messageId: string, messages: messageType[], message: string, files:messageFilesType[]) => {

    return messages.map((messageObj) => {
        if (messageObj.id === messageId) {
            messageObj.message = message
            messageObj.files = files
            return messageObj
        }
        return messageObj
    })
}

const deleteFile = (messageFiles: messageFilesType[], fileId: string) => {
    return messageFiles.filter(({id}) => id !== fileId )
}

const room = (state = initialState, action: roomACType): initialStateType => {

    switch (action.type) {
        case SET_ROOM:
            const {name, messages, avatar} = action.room

            return {
                ...state,
                roomName: name,
                avatar: avatar,
                messages: messages,
                selectedMessages: [],
                messageFiles: []
            }

        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, action.message],
                messageFiles: [],

            }

        case ADD_FILE:

            return {
                ...state,
                messageFiles: [...state.messageFiles, action.file]
            }

        case DELETE_FILE:

            const filesForDelete = state.messageFiles
            const fileIdForDelete = action.fileId
            const filesAfterDeleting = deleteFile(filesForDelete, fileIdForDelete)

            return {
                ...state,
                messageFiles: filesAfterDeleting
            }

        case SELECT_MESSAGE:

            const selectedMessagesForSelect = state.selectedMessages
            const messageIdForSelect = action.messageId
            const newSelect = selectMessages(selectedMessagesForSelect, messageIdForSelect)

            return {
                ...state,
                selectedMessages: newSelect
            }

        case DELETE_MESSAGE:

            const selectedMessages = state.selectedMessages
            const allMessagesForDelete = state.messages
            const newMessagesAfterDeletion = deleteMessages(allMessagesForDelete, selectedMessages)

            return {
                ...state,
                messages: newMessagesAfterDeletion,
                selectedMessages: []
            }

        case SET_EDIT_STATUS:

            const isEdit = action.payload.isEdit
            const messageIdForEdit = action.payload.messageId

            const editStatus = {
                isEdit: isEdit,
                messageId: messageIdForEdit
            }

            const messageForFiles = state.messages.find(({id}) => id === messageIdForEdit) as messageType
            const files = messageForFiles ? messageForFiles.files : []

            return {
                ...state,
                isEdit: editStatus,
                messageFiles: files
            }

        case EDIT_MESSAGE:

            const messageId = state.isEdit.messageId
            const allMessagesForEdit = state.messages
            const newMessage = action.message
            const newFiles = action.files
            const newMessagesAfterEditing = editMessage(messageId, allMessagesForEdit, newMessage, newFiles)

            return {
                ...state,
                messages: newMessagesAfterEditing
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }


        default:
            return state
    }
}

export default room