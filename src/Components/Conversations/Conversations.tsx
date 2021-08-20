import React from "react";
import Rooms from "./Rooms/Rooms";
import SearchRoom from "./SearchRoom/SearchRoom";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";

function Conversations() {

    const roomsCount = useTypesSelector(({rooms}) => rooms?.rooms.length)

    return (
        <section className="conversations">
            <SearchRoom roomsCount={roomsCount}/>
            <Rooms/>
        </section>
    )
}

export default Conversations