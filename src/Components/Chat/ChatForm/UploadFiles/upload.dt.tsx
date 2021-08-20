import React from "react";
import {FileMenuCamera, FileMenuMusic, FileMenuVideo} from "../../../Sprites";

export const navMenuFiles = [
    {
        type: 'imageFile',
        title: 'Image',
        Picture: FileMenuCamera,
        multiple: true,
        accept: '.png, .jpeg, .jpg, .gif'
    },

    {
        type: 'videoFile',
        title: 'Video',
        Picture: FileMenuVideo,
        multiple: true,
        accept: '.mp4, .webm, .ogg, .wav,'
    },

    {
        type: 'musicFile',
        title: 'Music',
        Picture: FileMenuMusic,
        multiple: true,
        accept: '.mp3'
    },

]