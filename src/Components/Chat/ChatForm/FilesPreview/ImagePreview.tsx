import React from "react";
import {imagePreviewType} from "./types";
import {DeleteFile} from "../../../Sprites";


function ImagePreview({id, image, handleDeleteFile}:imagePreviewType) {
    return (
        <section className="preview__img">
            <div onClick={handleDeleteFile.bind(null, id)} className="preview__img--delete">
                <DeleteFile className="delete-img" />
            </div>
            <img src={image} alt=""/>
        </section>

    )
}

export default ImagePreview