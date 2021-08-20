import React from "react";
import {NavLink} from "react-router-dom";
import {roomPropsType} from "./types";


function Room({id, activeRoom, name, avatar}:roomPropsType) {


    return (
        <>
            <NavLink to={'/chat/' + id}>
                <div className={name === activeRoom ? "room active" : "room"}>
                    <div className="room__img">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="room__title"><p>{name}</p></div>
                </div>
            </NavLink>
        </>

    )
}

export default Room