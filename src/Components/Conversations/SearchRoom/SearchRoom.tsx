import React from "react";
import Button from "../../Button";
import SearchRoomForm from "../SearchRoomForm/SearchRoomForm";
import {searchRoomType} from "../types";


function SearchRoom({roomsCount}:searchRoomType) {

    return (
        <>
            <div className="search">
                <div className="search__status">
                    <div className="search__title"><h3>Conversations ({roomsCount ? roomsCount : 'Нет комнат!'})</h3></div>
                    <Button className="button__add--conversation">New conversation</Button>
                </div>
                <div className="search__form">
                    <SearchRoomForm/>
                </div>
            </div>
        </>
    )
}

export default SearchRoom