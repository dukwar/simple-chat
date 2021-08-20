import React from "react";
import {imagePreviewType} from "./types";
import {DeleteFile} from "../../../Sprites";


function MusicPreview({id, image, handleDeleteFile}:imagePreviewType) {
    return (
        <section className="preview__music">
            <div onClick={handleDeleteFile.bind(null, id)} className="preview__music--delete">
                <DeleteFile className="delete-music" />
            </div>
            <audio controls src={image} />
        </section>

    )
}

export default MusicPreview