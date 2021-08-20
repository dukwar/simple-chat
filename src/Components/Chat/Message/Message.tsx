import React from "react";
import MessageCurrent from "./MessageCurrent";
import MessageGuest from "./MessageGuest";
import {messagePropsType} from "../types";
import {EditMessage} from "../../Sprites";


function Message({id, name, avatar, message, files, selectedMessages, userName, handleSelectMessage, handleEditMessage}: messagePropsType) {


    return (
        <div
            className={selectedMessages.some((messageId) => messageId === id) ? "message__wrapper active" : "message__wrapper"}
            onClick={handleSelectMessage.bind(null, id)}>
            {userName === name
                ? <MessageCurrent id={id} name={name} avatar={avatar} message={message} files={files}/>
                : <MessageGuest id={id} name={name} avatar={avatar} message={message} files={files}/>
            }
            <div className={userName === name ? "message__actions current" : "message__actions" }>
                <div onClick={(e) => handleEditMessage(e, id)}>
                    <EditMessage className="message__action current"/>
                </div>
            </div>
        </div>
    )
}

export default Message