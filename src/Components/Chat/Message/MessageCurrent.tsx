import React from "react";
import {messageType} from "../../../redux/reducers/types";
import MessageFiles from "./MessageFiles";


function MessageCurrent({name, avatar, message, files}: messageType) {

    return (
        <section className="message message--current">
            <div className="message__data message__data--current">
                <h4>{name}</h4>
                <p>{message}</p>
                <MessageFiles files={files}/>
            </div>
            <div className="message__img">
                <img src={avatar ? avatar : require("../../../assets/chat/anonymous.svg").default} alt=""/>
            </div>
        </section>
    )
}

export default MessageCurrent