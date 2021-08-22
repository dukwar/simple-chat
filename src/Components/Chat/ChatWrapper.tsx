import {Route, Switch, useRouteMatch} from "react-router-dom";
import ChatContainer from "./ChatContainer";
import React from "react";

const ChatWrapper = () => {

    const {path} = useRouteMatch()

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <div className="chat__choose"><h3>Выберите чат!</h3></div>
                </Route>
                <Route path={`${path}/:id`}>
                    <ChatContainer/>
                </Route>
            </Switch>
        </>
    )
}

export default ChatWrapper