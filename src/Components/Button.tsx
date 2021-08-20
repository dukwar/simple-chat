import React from "react";
import classNames from "classnames";
import {buttonType} from "./types";



function Button({className, onClick, children}: buttonType) {

    const classes = classNames(
        'button',
        className
    )

    return (
        <>
            <button
                className={classes}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button