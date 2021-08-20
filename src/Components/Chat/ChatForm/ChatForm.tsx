import React, {useState} from "react";
import {useFormik} from "formik";
import {chatValues} from "./types";
import {useRoomActions} from "../../../hooks/useActions.hook";
import {useTypesSelector} from "../../../hooks/useTypesSelector.hook";
import Button from "../../Button";
import {EditCancel, FileClip, SendMessage} from "../../Sprites";
import UploadFiles from "./UploadFiles/uploadFiles";
import ImagePreview from "./FilesPreview/ImagePreview";
import VideoPreview from "./FilesPreview/VideoPreview";
import MusicPreview from "./FilesPreview/MusicPreview";
import Preview from "./Preview";


function ChatForm({textAreaRef}: any) {


    const [showFileMenu, setShowFileMenu] = useState(false)
    const setShowMenu = () => setShowFileMenu(true)
    const setCloseMenu = () => setShowFileMenu(false)

    const {name, avatar} = useTypesSelector(({profile}) => profile.profile)
    const isEdit = useTypesSelector(({room}) => room.isEdit.isEdit)
    const messageFiles = useTypesSelector(({room}) => room.messageFiles)
    const {addMessage, editMessage, setEditStatus, deleteFile} = useRoomActions()

    const handleCloseEdit = (): void => {
        setEditStatus(false, '')
    }

    const handleDeleteFile = (id: string) => {
        deleteFile(id)
    }

    const handleSubmitMessage = (message: string): void => {
        if (isEdit) {
            editMessage(message, messageFiles)
            setEditStatus(false, '')

        } else {
            const messageData = {
                id: String(Date.now()),
                message,
                name,
                avatar,
                files: messageFiles
            }
            addMessage(messageData)
        }
    }


    const formik = useFormik({
        initialValues: {
            message: ''
        },

        onSubmit: ({message}: chatValues) => {
            handleSubmitMessage(message)
            formik.resetForm()
        }
    })

    const hasMessage = formik.values.message || messageFiles && messageFiles.length !== 0

    return (
        <div className="chat-form__wrapper">
            <div className={isEdit ? "chat-form__edit-cancel open" : "chat-form__edit-cancel"}>
                <h4>Editing a <span>message</span></h4>
                <div onClick={handleCloseEdit}>
                    <EditCancel className="chat-form__edit-cancel--mark"/>
                </div>
            </div>

            <form className="chat-form" onSubmit={formik.handleSubmit}>

                <div onMouseMove={setShowMenu} onMouseLeave={setCloseMenu} className="chat-form__clip">
                    {showFileMenu && <UploadFiles/>}
                    <FileClip className="clip"/>
                </div>
                <textarea ref={textAreaRef}
                          id="message"
                          name="message"
                          placeholder="Type here..."
                          onChange={formik.handleChange}
                          value={formik.values.message}
                />
                <Button className="button__chat">
                    <SendMessage className={hasMessage ? "chat-form__send active" : "chat-form__send"}/>
                </Button>
            </form>
            <Preview messageFiles={messageFiles} handleDeleteFile={handleDeleteFile} />
        </div>
    )
}

export default ChatForm