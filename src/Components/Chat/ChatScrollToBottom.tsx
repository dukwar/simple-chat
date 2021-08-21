import React, {useEffect, useState} from "react";
import {ChatArrowNavigate} from "../Sprites";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";


function ChatScrollToBottom() {

    const [isVisible, setVisible] = useState<boolean>(false)
    const {messages} = useTypesSelector(({room}) => room)


    const handleScrollToBottom = () => {
        const content = document.getElementById('chat-content')
        if (content) content.scrollTop = content.scrollHeight
        setVisible(false)
    }

    const handleCheckScrollPos = (): void => {
        const content = document.getElementById('chat-content')
        if (content) {
            let scrollBottom = content.scrollHeight - content.scrollTop - content.clientHeight
            scrollBottom >= 200 ? setVisible(true) : setVisible(false)
        }
    }

    useEffect(() => {
        if (messages.length < 5) setVisible(false)
        const content = document.getElementById('chat-content')
        content?.addEventListener('scroll', handleCheckScrollPos)
        return () => content?.removeEventListener('scroll', handleCheckScrollPos)
    }, [])

    useEffect(() => {
        if (messages.length <= 5) setVisible(false)
    }, [messages])

    return (
        <div className={isVisible ? "chat__scroll active" : "chat__scroll"} onClick={handleScrollToBottom}>
            <ChatArrowNavigate className="chat__arrow"/>
        </div>
    )
}

export default ChatScrollToBottom