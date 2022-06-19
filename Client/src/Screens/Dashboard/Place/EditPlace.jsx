import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { BsArrowLeft } from "react-icons/bs"

import { CircularProgress } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import { EditPlaceAPI, getPlaceAPI } from "../../../API/Place"

import AddImg from "../../../Assets/addimg.png"

import "./EditPlace.scss"


const EditTour = (props) => {
    let history = useHistory()
    let params = useParams()

    const hidenInput = useRef(null)
    const hidenInput1 = useRef(null)
    const hidenInput2 = useRef(null)
    const hidenInput3 = useRef(null)
    // const hidenInput4 = useRef(null)
    const hidenInput5 = useRef(null)

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

    const updatingData = async () => {
        let res = await EditPlaceAPI(props.id, enteredData)
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
            toast.success("Update Place Success", {
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
        if (value == "0") {
            hidenInput.current.click()
        }
        else if (value == "1") {
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
        else if (value == "5") {
            hidenInput5.current.click()
        }
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

    let gettingtour = async () => {
        let res = await getPlaceAPI(props.id)
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
        gettingtour()
    }, [])

    return (
        <>
            <div className="edittour_container">
                <div className="title" onClick={() => history.go(0)}>
                    <BsArrowLeft /> Edit Place
                </div>
                {
                    enteredData ?
                        <>
                            <div className="tour_form">
                                <div className="heading"> SECTION 1 (Poster Section) </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.title} name="title" onChange={enteringInputData} type="text" />
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Image </p>
                                            <div className="img" onClick={() => addImg("0")}>
                                                <img src={!enteredData.img ? AddImg : enteredData.img.public} alt="ERROR" />
                                                <input ref={hidenInput} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "img")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Logo </p>
                                            <div className="img" onClick={() => addImg("5")}>
                                                <img src={!enteredData.logo ? AddImg : enteredData.logo.public} alt="ERROR" />
                                                <input ref={hidenInput5} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "logo")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 2 (Details Section) </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.s1Heading} name="s1Heading" onChange={enteringInputData} type="text" />
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Details : </p>
                                        <ReactQuill value={enteredData.s1Details} onChange={(value) => enteringQuilData(value, "s1Details")} />
                                    </div>
                                    <div className="input_boxes">
                                        <div className="input_box">
                                            <p> Population : </p>
                                            <input type="text" />
                                        </div>
                                        <div className="input_box">
                                            <p> Size : </p>
                                            <input type="text" />
                                        </div>
                                        <div className="input_box">
                                            <p> Area : </p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 3 (Boxes Section) </div>
                                <div className="title">
                                    Box 1 :
                                </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.s3Box1Heading} name="s3Box1Heading" onChange={enteringInputData} type="text" />
                                    </div>
                                    <div className="input_box">
                                        <p> Details : </p>
                                        <ReactQuill value={enteredData.s3Box1Detail} onChange={(value) => enteringQuilData(value, "s3Box1Detail")} />
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Image </p>
                                            <div className="img" onClick={() => addImg("1")}>
                                                <img src={!enteredData.s3Box1Img ? AddImg : enteredData.s3Box1Img.public} alt="ERROR" />
                                                <input ref={hidenInput1} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "s3Box1Img")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    Box 2 :
                                </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.s3Box2Heading} name="s3Box2Heading" onChange={enteringInputData} type="text" />
                                    </div>
                                    <div className="input_box">
                                        <p> Details : </p>
                                        <ReactQuill value={enteredData.s3Box2Detail} onChange={(value) => enteringQuilData(value, "s3Box2Detail")} />
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Image </p>
                                            <div className="img" onClick={() => addImg("2")}>
                                                <img src={!enteredData.s3Box2Img ? AddImg : enteredData.s3Box2Img.public} alt="ERROR" />
                                                <input ref={hidenInput2} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "s3Box2Img")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    Box 3 :
                                </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.s3Box3Heading} name="s3Box3Heading" onChange={enteringInputData} type="text" />
                                    </div>
                                    <div className="input_box">
                                        <p> Details : </p>
                                        <ReactQuill value={enteredData.s3Box3Detail} onChange={(value) => enteringQuilData(value, "s3Box3Detail")} />
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Image </p>
                                            <div className="img" onClick={() => addImg("3")}>
                                                <img src={!enteredData.s3Box3Img ? AddImg : enteredData.s3Box3Img.public} alt="ERROR" />
                                                <input ref={hidenInput3} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "s3Box3Img")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="title">
                                    Box 4 :
                                </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Title : </p>
                                        <input value={enteredData.s3Box4Heading} name="s3Box4Heading" onChange={enteringInputData} type="text" />
                                    </div>
                                    <div className="input_box">
                                        <p> Details : </p>
                                        <ReactQuill value={enteredData.s3Box4Detail} onChange={(value) => enteringQuilData(value, "s3Box4Detail")} />
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Upload Image </p>
                                            <div className="img" onClick={() => addImg("4")}>
                                                <img src={!enteredData.s3Box4Img ? AddImg : enteredData.s3Box4Img.public} alt="ERROR" />
                                                <input ref={hidenInput4} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "s3Box4Img")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="btn">
                                    <button onClick={updatingData}> Update Place </button>
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

export default EditTour