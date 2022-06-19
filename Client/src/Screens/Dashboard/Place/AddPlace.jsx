import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { BsArrowLeft } from "react-icons/bs"

import { ToastContainer, toast } from 'react-toastify';
import { AddPlaceAPI } from "../../../API/Place"

import "./AddPlace.scss"

const AddTour = (props) => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        country: props.country,
        title: "",
        img: "",
        logo:"",
        s1Heading: "",
        s1Details: "",
        facts: {},
        s3Box1Heading: "",
        s3Box1Detail: "",
        s3Box1Img: "",
        s3Box2Heading: "",
        s3Box2Detail: "",
        s3Box2Img: "",
        s3Box3Heading: "",
        s3Box3Detail: "",
        s3Box3Img: "",
        // s3Box4Heading: "",
        // s3Box4Detail: "",
        // s3Box4Img: "",
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
    const enteringImgData = (event) => {
        let { name, files } = event.target

        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: files[0]
            }
        })
    }

    const savingData = async () => {
        let res = await AddPlaceAPI(enteredData)
        console.log("--------------" , res);
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
            toast.success("Place Added Success", {
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
                    <BsArrowLeft /> Add Place
                </div>
                <div className="tour_form">
                    <div className="heading"> SECTION 1 (Poster Section) </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Title : </p>
                            <input value={enteredData.title} name="title" onChange={enteringInputData} type="text" />
                        </div>
                        <div className="input_box">
                            <p> Poster IMG </p>
                            <input style={{ fontSize: "small" }} name="img" onChange={enteringImgData} type="file" />
                        </div>
                        <div className="input_box">
                            <p> Place Logo </p>
                            <input style={{ fontSize: "small" }} name="logo" onChange={enteringImgData} type="file" />
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
                        <div className="input_box">
                            <p> IMG : </p>
                            <input style={{ fontSize: "small" }} name="s3Box1Img" onChange={enteringImgData} type="file" />
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
                        <div className="input_box">
                            <p> IMG : </p>
                            <input style={{ fontSize: "small" }} name="s3Box2Img" onChange={enteringImgData} type="file" />
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
                        <div className="input_box">
                            <p> IMG : </p>
                            <input style={{ fontSize: "small" }} name="s3Box3Img" onChange={enteringImgData} type="file" />
                        </div>
                    </div>
                    {/* <div className="title">
                        Box 4 :
                    </div> */}
                    {/* <div className="line">
                        <div className="input_box">
                            <p> Title : </p>
                            <input value={enteredData.s3Box4Heading} name="s3Box4Heading" onChange={enteringInputData} type="text" />
                        </div>
                        <div className="input_box">
                            <p> Details : </p>
                            <ReactQuill value={enteredData.s3Box4Detail} onChange={(value) => enteringQuilData(value, "s3Box4Detail")} />
                        </div>
                        <div className="input_box">
                            <p> IMG : </p>
                            <input style={{ fontSize: "small" }} name="s3Box4Img" onChange={enteringImgData} type="file" />
                        </div>
                    </div> */}
                    <div className="btn">
                        <button onClick={savingData}> Add Place </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTour