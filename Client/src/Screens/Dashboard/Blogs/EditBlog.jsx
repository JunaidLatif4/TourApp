import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { BsArrowLeft } from "react-icons/bs"

import { CircularProgress } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import { EditBlogAPI, getBlogsAPI } from "../../../API/Blogs"

import AddImg from "../../../Assets/addimg.png"

import "./EditBlog.scss"


const EditCountry = (props) => {
    let history = useHistory()
    let params = useParams()

    const hidenInput1 = useRef(null)

    const [enteredData, setEnteredData] = useState(null)

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
    // const enteringImgData = (event) => {
    //     let { name, files } = event.target

    //     setEnteredData((preValue) => {
    //         return {
    //             ...preValue,
    //             [name]: files[0]
    //         }
    //     })
    // }

    const updatingData = async () => {
        let res = await EditBlogAPI(props.id, enteredData)
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
            toast.success("Update Blog Success", {
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

    const addImg = (value) => {
        if (value == "1") {
            hidenInput1.current.click()
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

    let gettingBlogs = async () => {
        let res = await getBlogsAPI(props.id)
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
            setEnteredData(res.data.data)
        }
    }

    useEffect(() => {
        gettingBlogs()
    }, [])

    return (
        <>
            <div className="editcountry_container">
                <div className="title" onClick={() => history.go(0)}>
                    <BsArrowLeft /> Edit Country
                </div>
                {
                    enteredData ?
                        <>
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
                                    <button onClick={updatingData}> Update Country </button>
                                </div>
                            </div>
                        </>
                        :
                        <div style={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", width: "-webkit-fill-available" }}>
                            <CircularProgress />
                        </div>
                }

            </div>
        </>
    )
}

export default EditCountry