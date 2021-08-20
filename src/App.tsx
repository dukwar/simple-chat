import React from 'react';
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {useRoutes} from "./hooks/useRoutes";
import {useTypesSelector} from "./hooks/useTypesSelector.hook";


function App() {

    const isAuth = useTypesSelector(({auth}) => auth.isAuth )
    const routes = useRoutes(isAuth)


    return (
        <>
            <HeaderContainer/>
            <div className="wrapper">
                <SidebarContainer/>
                <div className="content">
                    {routes}
                </div>
            </div>
        </>
    )
}

export default App;
