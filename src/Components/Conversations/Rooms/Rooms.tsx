import React, {useEffect} from "react";
import Room from "./Room";
import {useTypesSelector} from "../../../hooks/useTypesSelector.hook";
import {useRoomsActions} from "../../../hooks/useActions.hook";
import {useRequest} from "../../../hooks/useRequest.hook";


function Rooms() {

    const rooms = useTypesSelector(({rooms}) => rooms.rooms)
    const activeRoom = useTypesSelector(({room}) => room.roomName)

    const {getRooms} = useRoomsActions()
    const {request} = useRequest()

    useEffect(() => {
        getRooms(request,'rooms')
    }, [])

    return (
        <>
            <div className="rooms">
                {rooms && rooms.length > 0 && rooms.map(({id, name, avatar}) => <Room key={`${id}-${name}`} id={id} activeRoom={activeRoom} name={name} avatar={avatar} />)}

            </div>
        </>
    )
}

export default Rooms