import React, {useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm/ChatForm";
import Message from "./Message/Message";
import {chatType} from "./types";
import ChatScrollToBottom from "./ChatScrollToBottom";


function Chat({
                  roomName,
                  avatar,
                  messages,
                  userName,
                  selectedMessages,
                  handleSelectMessage,
                  handleEditMessage,
                  handleDeleteMessage,
                  textAreaRef,
                  setScrollBottom
              }: chatType) {

    useEffect(() => {
        setScrollBottom()
    }, [roomName, messages])



    return (

        <section className="chat">

            <ChatHeader messageSelect={selectedMessages}
                        name={roomName}
                        avatar={avatar}
                        handleDeleteMessage={handleDeleteMessage}
            />

            <div className="chat__content--wrapper">
                <div id="chat-content" className="chat__content">
                    {messages && messages.length > 0 && messages
                        .map(({id, name, avatar, message, files}) =>
                            <Message
                                key={`${name}-${id}`}
                                id={id}
                                userName={userName}
                                selectedMessages={selectedMessages}
                                handleSelectMessage={handleSelectMessage}
                                handleEditMessage={handleEditMessage}
                                name={name}
                                avatar={avatar}
                                message={message}
                                files={files}
                            />)}
                </div>
            </div>


            <div className="chat__input">
                <ChatForm textAreaRef={textAreaRef}/>
                <ChatScrollToBottom />
            </div>
        </section>

    )
}

export default Chat