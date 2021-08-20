import {messageFilesType} from "../../../redux/reducers/types";

export interface chatValues {
    message: string
}

export interface previewPropsType {
    messageFiles: messageFilesType[],
    handleDeleteFile: (id:string) => void
}
