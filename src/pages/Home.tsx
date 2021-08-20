import React from "react";
import Conversations from "../Components/Conversations/Conversations";
import {BrowserRouter} from "react-router-dom";
import ChatWrapper from "../Components/Chat/ChatWrapper";


function Home() {

    return (
        <>
            <BrowserRouter>
                <Conversations/>
                <ChatWrapper/>
            </BrowserRouter>
        </>
    )
}



export default Home