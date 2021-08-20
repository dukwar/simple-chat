import React, {ChangeEvent} from "react";
import {FormikErrors, useFormik} from "formik";
import {authValues} from "./types";
import Button from "../Button";
import {useUpload} from "../../hooks/useUpload.hook";


function AuthForm() {

    const {uploadProfile} = useUpload()

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>):void => {
        if (e.target.files) {
            const file = e.target.files[0]
            formik.setFieldValue('avatar', file)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            avatar: '',
        },

        validate({name}: authValues) {
            const errors: FormikErrors<authValues> = {}

            if (!name) {
                errors.name = 'Required'
            }

            return errors
        },


        onSubmit: (values: authValues) => {
            const name = values.name
            const avatar = values.avatar
            uploadProfile(name, avatar)
        }
    })

    const hasNameError = formik.touched && formik.errors.name

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <h3>Enter your name</h3>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    autoComplete="off"
                />
                {hasNameError && <div className="auth-form__error">{formik.errors.name}</div>}

                <h3>Add a picture</h3>
                <label htmlFor="avatar" className="auth-form__input-file--custom">
                    Add an avatar
                    <input
                        id="avatar"
                        name="avatar"
                        type="file"
                        className="auth-form__input-file"
                        onChange={handleFileChange}
                    />
                </label>
                {formik.values.avatar && <h3>File added!</h3>}
                <Button className="button__auth"><p>Login</p></Button>
            </form>
        </div>

    )
}


export default AuthForm