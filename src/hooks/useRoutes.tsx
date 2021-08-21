import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import Home from "../pages/Home";
import Auth from "../pages/Auth";

export const useRoutes = (isAuthenticated: boolean) => {

    if (isAuthenticated) {
        return (
            <Switch>

                <Route path='/home' exact>
                    <Home/>
                </Route>
                <Redirect to="/home"/>

            </Switch>
        )
    }


    return (
        <Switch>

            <Route path='/' exact>
                <Auth/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )

}