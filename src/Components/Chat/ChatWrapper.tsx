import {Route, useLocation} from "react-router-dom";
import ChatContainer from "./ChatContainer";
import React from "react";

const ChatWrapper = () => {

    const location = useLocation()
    const path = location.pathname

    return (
        <>

            {path === '/'
                ? <div className="chat__choose"><h3>Выберите чат!</h3></div>
                : <Route exact path="/chat/:id" render={() => <ChatContainer/>}/>}
        </>
    )
}

export default ChatWrapper