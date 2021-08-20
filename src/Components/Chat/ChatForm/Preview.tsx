import React from "react";
import ImagePreview from "./FilesPreview/ImagePreview";
import VideoPreview from "./FilesPreview/VideoPreview";
import MusicPreview from "./FilesPreview/MusicPreview";
import {previewPropsType} from "./types";



const Preview = React.memo(({messageFiles, handleDeleteFile}:previewPropsType) => {
    return (
        <>
            {messageFiles && messageFiles.length > 0 &&
            <div className="preview">
                <div className="preview__pictures">
                    {messageFiles.map(({id, file, type}) => type === 'imageFile' ?
                        <ImagePreview key={id} id={id} image={file}
                                      handleDeleteFile={handleDeleteFile}/> : type === 'videoFile' ?
                            <VideoPreview key={id} id={id} image={file} handleDeleteFile={handleDeleteFile}/> : null)}
                </div>
                <div className="preview__musical">
                    {messageFiles.map(({id, file, type}) => type === 'musicFile' ?
                        <MusicPreview key={id} id={id} image={file} handleDeleteFile={handleDeleteFile}/> : null)}
                </div>
            </div>
            }
        </>
    )
})

export default Preview