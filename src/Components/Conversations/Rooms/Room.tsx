import React from "react";
import {NavLink, useRouteMatch} from "react-router-dom";
import {roomPropsType} from "./types";


function Room({id, activeRoom, name, avatar}:roomPropsType) {

    const {url} = useRouteMatch()

    return (
        <>
            <NavLink to={`${url}/${id}`}>
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