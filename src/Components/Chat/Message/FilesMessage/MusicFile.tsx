import React from "react";
import {messageFilePropsType} from "./types";


function MusicFile({fileLink}: messageFilePropsType) {

    return (
        <section className="music-file">
            <audio src={fileLink} controls/>
        </section>
    )
}

export default MusicFile