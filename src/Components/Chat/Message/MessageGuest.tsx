import React from "react";
import {messageType} from "../../../redux/reducers/types";
import MessageFiles from "./MessageFiles";


function MessageGuest({name, avatar, message, files}: messageType) {

    return (
        <section className="message">
            <div className="message__img">
                <img src={avatar ? avatar : require("../../../assets/chat/anonymous.svg").default} alt=""/>
            </div>
            <div className="message__data">
                <h4>{name}</h4>
                <p>{message}</p>
                <MessageFiles files={files}/>
            </div>
        </section>
    )
}

export default MessageGuest