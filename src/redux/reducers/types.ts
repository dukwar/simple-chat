export interface roomsType {
    id: string,
    name: string,
    avatar: string
}

export interface roomType {
    name: string,
    avatar: string,
    messages: messageType[]
}

export interface messageType {
    id: string,
    name: string,
    avatar: string,
    message:  string,
    files: messageFilesType[]
}

export interface isEditType {
    isEdit: boolean,
    messageId: string
}

export interface messageFilesType {
    id: string,
    type: string,
    file: string
}

export interface profileType {
    name: string,
    avatar: string
}