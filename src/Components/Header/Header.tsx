import React from "react";
import {headerType} from "./types";
import Burger from "./Burger";


function Header({visibleHeader, sidebarIsOpen, handleOpenMobileSidebar}:headerType) {


    return (
        <header className={visibleHeader ? "header active" : "header"}>
            {visibleHeader &&
            <div className="container">
                <div className="header__inner">
                    <Burger
                        sidebarIsOpen={sidebarIsOpen}
                        handleOpenMobileSidebar={handleOpenMobileSidebar}
                    />
                </div>
            </div>
            }

        </header>
    )
}

export default Header