import React from "react";
import {messageFilePropsType} from "./types";



function VideoFile({fileLink}:messageFilePropsType) {

    return (
        <section className="video-file">
            <video src={fileLink} controls/>
        </section>
    )
}

export default VideoFile