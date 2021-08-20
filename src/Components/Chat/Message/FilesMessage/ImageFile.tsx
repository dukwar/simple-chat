import React from "react";
import {messageFilePropsType} from "./types";


function ImageFile({fileLink}: messageFilePropsType) {

    return (
        <section className="image-file">
            <img src={fileLink} alt=""/>
        </section>
    )
}

export default ImageFile