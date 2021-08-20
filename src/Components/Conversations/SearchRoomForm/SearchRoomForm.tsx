import React, {useState} from "react";
import classNames from "classnames";
import {Search} from "../../Sprites";
import {useFormik} from "formik";
import {Values} from "./types";


function SearchRoomForm() {


    const [borderForm, setBorderForm] = useState(false)
    const handleSetBorder = () => setBorderForm(true)
    const handleDeleteBorder = () => setBorderForm(false)


    const formik = useFormik({
        initialValues: {
            search: '',
        },

        onSubmit: ({search}: Values) => {
            console.log(search)
        }
    })


    const classes = classNames(
        'search-form',
        {border: borderForm},
    )

    return (
        <>
            <form className={classes}>
                <input
                    id="search"
                    name="search"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    autoComplete="off"
                    onFocus={handleSetBorder}
                    onBlur={handleDeleteBorder}
                />
                <div className="search__logo">
                    <Search className="search__logo--item"/>
                </div>

                {!formik.values.search && <label htmlFor="search">Search...</label>}
            </form>

        </>
    );
}

export default SearchRoomForm