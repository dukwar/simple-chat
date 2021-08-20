import React from "react";
import {imagePreviewType} from "./types";
import {DeleteFile} from "../../../Sprites";


function VideoPreview({id, image, handleDeleteFile}:imagePreviewType) {
    return (
        <section className="preview__img">
            <div onClick={handleDeleteFile.bind(null, id)} className="preview__img--delete">
                <DeleteFile className="delete-img" />
            </div>
            <video src={image} />
        </section>

    )
}

export default VideoPreview