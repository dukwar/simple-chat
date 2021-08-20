import React from "react";

export interface buttonType {
    className?: string,
    onClick?: () => void,
    children: React.ReactNode
}

export interface preloaderType {
    className: string
}