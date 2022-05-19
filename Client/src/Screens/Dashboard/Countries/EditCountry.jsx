import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { BsArrowLeft } from "react-icons/bs"

import { CircularProgress } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import { AddCountryAPI, EditCountryAPI, getCountriesAPI } from "../../../API/country"

import AddImg from "../../../Assets/addimg.png"

import "./EditCountry.scss"


const EditCountry = (props) => {
    let history = useHistory()
    let params = useParams()

    const hidenInput = useRef(null)
    const hidenInput1 = useRef(null)
    const hidenInput2 = useRef(null)
    const hidenInput3 = useRef(null)
    const hidenInput4 = useRef(null)

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
        let res = await EditCountryAPI(props.id, enteredData)
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
            toast.success("Update Country Success", {
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
        else if (value == "4") {
            hidenInput4.current.click()
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

    let gettingCountries = async () => {
        let res = await getCountriesAPI(props.id)
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
        gettingCountries()
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
                                    <div className="input_box">
                                        <p> YouTube Link : </p>
                                        <input value={enteredData.youtubeLink} name="youtubeLink" onChange={enteringInputData} type="text" />
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
                                <div className="title">
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
                                </div>
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