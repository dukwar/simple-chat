import React from "react";
import {chatHeaderType} from "./types";
import {Trash} from "../Sprites";


function ChatHeader({name, avatar, messageSelect, handleDeleteMessage}: chatHeaderType) {


    return (

        <header>
            <div className="chat-info">
                <div className="chat-info__img">
                    <img src={avatar} alt=""/>
                </div>
                <div className="chat-info__title">
                    <h3>{name}</h3>
                </div>
            </div>


            <div className="chat-data">
                {messageSelect && messageSelect.length > 0 &&
                <div className="chat-data__actions">
                    <div onClick={handleDeleteMessage.bind(null, messageSelect)}>
                        <Trash className="chat-data__action"/>
                    </div>
                </div>
                }

                <div className="chat-data__settings">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </header>
    )
}

export default ChatHeader