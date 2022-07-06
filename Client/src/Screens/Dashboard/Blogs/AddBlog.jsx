import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { BsArrowLeft } from "react-icons/bs"

import { ToastContainer, toast } from 'react-toastify';
import { AddBlogAPI } from "../../../API/Blogs"

import AddImg from "../../../Assets/addimg.png"

import "./AddBlog.scss"

const AddCountry = () => {
    let history = useHistory()

    const hidenInput1 = useRef(null)
    const hidenInput2 = useRef(null)
    const hidenInput3 = useRef(null)
    // const hidenInput4 = useRef(null)

    const [enteredData, setEnteredData] = useState({
        img: "",
        title: "",
        details: "",
        category: "",
        author: "",
    })

    const enteringInputData = (event) => {
        let { name, value } = event.target
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const enteringQuilData = (value, name) => {
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const addImg = (value) => {
        if (value == "1") {
            hidenInput1.current.click()
        }
        else if (value == "2") {
            hidenInput2.current.click()
        }
        else if (value == "3") {
            hidenInput3.current.click()
        }
        // else if (value == "4") {
        //     hidenInput4.current.click()
        // }
    }
    const uploadingImg = (event, name) => {
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: {
                    public: URL.createObjectURL(event.target.files[0]),
                    file: event.target.files[0]
                }
            }
        })
    }

    const savingData = async () => {
        let res = await AddBlogAPI(enteredData)
        if (res.error != null) {
            toast.error(res.error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } else {
            toast.success("Blog Added Success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            setTimeout(() => {
                history.go(0)
            }, 5000);
        }
    }

    return (
        <>
            <div className="addtour_container">
                <div className="title" onClick={() => history.go(0)}>
                    <BsArrowLeft /> Add Blog
                </div>
                <div className="tour_form">
                    <div className="heading"> BOX </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Title : </p>
                            <input value={enteredData.title} name="title" onChange={enteringInputData} type="text" />
                        </div>
                        <div className="input_box">
                            <p> Author : </p>
                            <input value={enteredData.author} name="author" onChange={enteringInputData} type="text" />
                        </div>
                        <div className="input_box">
                            <p> Author : </p>
                            <input value={enteredData.category} name="category" onChange={enteringInputData} type="text" />
                        </div>
                    </div>

                    <div className="line" style={{marginBottom:"2rem"}}>
                        <div className="input_box">
                            <p> Details : </p>
                            <ReactQuill value={enteredData.details} onChange={(value) => enteringQuilData(value, "details")} />
                        </div>
                        <div className="img_box">
                            <p> Image </p>
                            <div className="img" onClick={() => addImg("1")}>
                                <img src={!enteredData.img ? AddImg : enteredData.img.public} alt="ERROR" />
                                <input ref={hidenInput1} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "img")} style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="brack"></div>

                    <div className="btn">
                        <button onClick={savingData}> Add Country </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCountry