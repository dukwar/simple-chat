import React, {useEffect, useState} from "react";
import Header from "./Header";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import {useSidebarActions} from "../../hooks/useActions.hook";


function HeaderContainer() {

    const [visibleHeader, setVisibleHeader] = useState(false)
    const {isOpenMobile} = useTypesSelector(({sidebar}) => sidebar)
    const {setOpenMobileSidebar} = useSidebarActions()

    const handleOpenMobileSidebar = () => {
        setOpenMobileSidebar()
    }

    const handleResize = () => {
        const innerWidthVisibleHeader = 960;
        if (window.innerWidth <= innerWidthVisibleHeader) setVisibleHeader(true)
        else setVisibleHeader(false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return <Header
        visibleHeader={visibleHeader}
        sidebarIsOpen={isOpenMobile}
        handleOpenMobileSidebar={handleOpenMobileSidebar}
    />
}

export default HeaderContainer