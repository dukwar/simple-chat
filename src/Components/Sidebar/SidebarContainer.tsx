import React, {useEffect} from "react";
import {Sidebar} from "./Sidebar";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import {useSidebarActions} from "../../hooks/useActions.hook";



function SidebarContainer() {

    const {sidebarIsOpen, mobileSidebar, isOpenMobile} = useTypesSelector(({sidebar}) => sidebar )
    const {name, avatar} = useTypesSelector(({profile}) => profile.profile)
    const {isAuth} = useTypesSelector(({auth}) => auth)

    const {setOpenSidebar, setExpandSidebar, setMobileSidebar} = useSidebarActions()

    const handleExpand = () => setExpandSidebar()
    const handleBlurSidebar = (event:any) => {
        if (window.innerWidth < 1100 && !event.relatedTarget?.classList.value.includes("nav-link-reset")) {
            setOpenSidebar(false)
        }
    }

    const handleResize = () => {
        const innerWidthWhenSidebarIsHidden = 1100
        const innerWidthMobileSidebar = 960
        if (window.innerWidth <= innerWidthWhenSidebarIsHidden) setOpenSidebar(false)
        else setOpenSidebar(true)

        if (window.innerWidth <= innerWidthMobileSidebar) setMobileSidebar(true)
        else setMobileSidebar(false)

    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        handleExpand={handleExpand}
        handleBlurSidebar={handleBlurSidebar}
        mobileSidebar={mobileSidebar}
        isOpenMobile={isOpenMobile}
        name={name}
        avatar={avatar}
        isAuth={isAuth}
    />
}

export default SidebarContainer