import {useCallback} from "react";
import {useAuthActions, useProfileActions, useRoomActions} from "./useActions.hook";


export const useUpload = () => {

    const {addFile} = useRoomActions()
    const {setAuth} = useAuthActions()
    const {setProfile} = useProfileActions()

    const uploadFile = useCallback((files: FileList, type: string) => {

        const filesArr = Array.from(files)
        filesArr.forEach((file) => {
            const reader = new FileReader()

            reader.onloadend = (e) => {
                const file = e.target?.result as string
                const fileObj = {
                    id: String(Date.now()),
                    file,
                    type
                }
                addFile(fileObj)

            }
            reader.readAsDataURL(file)
        })


    }, [])

    const uploadProfile = useCallback((name:string, avatar:Blob) => {

        if (avatar) {
            let reader = new FileReader()
            reader.readAsDataURL(avatar)
            reader.onloadend = () => {
                const imgUrl = reader.result as string
                const profileObj = {name: name, avatar: imgUrl}
                setProfile(profileObj)
                setAuth(true)
            }
        }

        const profileObj = {name: name, avatar: ''}
        setProfile(profileObj)
        setAuth(true)

    }, [])


    return {uploadFile, uploadProfile}

}


