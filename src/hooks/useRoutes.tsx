import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import Home from "../pages/Home";
import Auth from "../pages/Auth";

export const useRoutes = (isAuthenticated: boolean) => {

    if (isAuthenticated) {
        return (
            <Switch>

                <Route path='/' exact>
                    <Home/>
                </Route>
                <Redirect to="/"/>

            </Switch>
        )
    }


    return (
        <Switch>

            <Route path='/auth' exact>
                <Auth/>
            </Route>
            <Redirect to='/auth'/>
        </Switch>
    )

}