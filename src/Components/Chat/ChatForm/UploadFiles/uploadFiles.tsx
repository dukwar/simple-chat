import React from "react";
import {navMenuFiles} from "./upload.dt";
import {useUpload} from "../../../../hooks/useUpload.hook";


function UploadFiles() {

    const {uploadFile} = useUpload()

    const handleChangeToAddFile = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const files = e.target.files
        if (files && files.length > 0) uploadFile(files, type)
    }

    return (
        <section className="chat-form__upload--wrapper">
            <div className="chat-form__upload">
                <ul>
                    {navMenuFiles.map(({type, title, Picture, multiple, accept}) => (
                        <li key={type}>
                            <label htmlFor={`input-${type}`}>
                                <Picture className="upload-sprite"/>
                                <p>{title}</p>
                            </label>
                            <input id={`input-${type}`} type="file" multiple={multiple} accept={accept}
                                   onChange={(e) => handleChangeToAddFile(e, type)}/>
                        </li>
                    ))}
                </ul>

            </div>
        </section>

    )
}

export default UploadFiles