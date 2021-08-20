import React from "react";
import {messageFilesType, messageType} from "../../redux/reducers/types";

export interface chatType {
    roomName: string,
    avatar: string,
    userName: string,
    messages: messageType[],
    handleDeleteMessage: (selectMessages:string[]) => void
    selectedMessages: string[],
    handleSelectMessage: (id: string) => void,
    handleEditMessage: (e:React.MouseEvent<HTMLDivElement>, id:string) => void,
    textAreaRef: any,
    setScrollBottom: () => void
}

export interface chatParams {
    id: string
}

export interface chatHeaderType {
    name: string,
    avatar: string,
    messageSelect: string[],
    handleDeleteMessage: (selectMessages:string[]) => void
}

export interface messagePropsType {
    id: string,
    name:string,
    avatar:string,
    message:string
    files: messageFilesType[],
    userName: string,
    selectedMessages: string[],
    handleSelectMessage: (id: string) => void,
    handleEditMessage: (e:React.MouseEvent<HTMLDivElement>, id:string) => void
}

export interface messageFilesPropsType {
    files: messageFilesType[]
}