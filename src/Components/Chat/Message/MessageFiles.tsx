import React from "react";
import {messageFilesPropsType} from "../types";
import ImageFile from "./FilesMessage/ImageFile";
import VideoFile from "./FilesMessage/VideoFile";
import MusicFile from "./FilesMessage/MusicFile";


function MessageFiles({files}: messageFilesPropsType) {


    return (
        <>
            {files && files.length > 0 &&
            <div className="message__files">
                <div className="message__pictures">
                    {files.map(({id, file, type}) => type === 'imageFile' ?
                        <ImageFile key={id} fileLink={file}/> : type === 'videoFile' ?
                            <VideoFile key={id} fileLink={file}/> : null)}
                </div>
                <div className="message__music">
                    {files.map(({id, file, type}) => type === 'musicFile' ?
                        <MusicFile key={id} fileLink={file}/> : null)}
                </div>
            </div>
            }
        </>
    )
}

export default MessageFiles