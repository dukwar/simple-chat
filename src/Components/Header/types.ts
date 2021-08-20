export interface burgerType {
    sidebarIsOpen: boolean,
    handleOpenMobileSidebar: () => void
}

export interface headerType extends burgerType{
    visibleHeader: boolean,
}