import React from "react";
import {burgerType} from "./types";


function BurgerMenu({sidebarIsOpen, handleOpenMobileSidebar}: burgerType) {


    return (
        <>
            <div className="burger" onClick={handleOpenMobileSidebar}>
                <div className={sidebarIsOpen ? "burger__item active" : "burger__item"}/>
                <div className={sidebarIsOpen ? "burger__item active" : "burger__item"}/>
                <div className={sidebarIsOpen ? "burger__item active" : "burger__item"}/>
            </div>

        </>
    )
}

export default BurgerMenu