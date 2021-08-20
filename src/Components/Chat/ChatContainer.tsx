import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import Chat from "./Chat";
import {chatParams} from "./types";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import {useRoomActions} from "../../hooks/useActions.hook";
import {useRequest} from "../../hooks/useRequest.hook";
import Preloader from "../Preloader";


function ChatContainer() {

    const textAreaRef = useRef<HTMLAreaElement>()
    const {id} = useParams<chatParams>()
    const {roomName, avatar, messages, selectedMessages, isFetching} = useTypesSelector(({room}) => room)
    const userName = useTypesSelector(({profile}) => profile.profile.name)

    const handleSelectMessage = (id: string): void => {
        selectMessage(id)
    }
    const handleDeleteMessage = (selectedMessages: string[]): void => {
        deleteMessage(selectedMessages)
    }

    const handleEditMessage = (e: React.MouseEvent<HTMLDivElement>, messageId: string): void => {
        e.stopPropagation()
        textAreaRef.current?.focus()
        setEditStatus(true, messageId)
    }

    const setScrollBottom = () => {
        const content = document.getElementById('chat-content')
        if (content) content.scrollTop = content.scrollHeight
    }

    const {getRoom, deleteMessage, setEditStatus} = useRoomActions()
    const {selectMessage} = useRoomActions()
    const {request} = useRequest()

    useEffect(() => {
        getRoom(request, id)
    }, [id])

    return (
        <>
            {isFetching
                ? <div className="chat__preloader"><Preloader className="black"/></div>
                : <Chat
                    roomName={roomName}
                    avatar={avatar}
                    messages={messages}
                    userName={userName}
                    selectedMessages={selectedMessages}
                    handleSelectMessage={handleSelectMessage}
                    handleDeleteMessage={handleDeleteMessage}
                    handleEditMessage={handleEditMessage}
                    textAreaRef={textAreaRef}
                    setScrollBottom={setScrollBottom}
                />
            }

        </>
    )
}


export default ChatContainer