import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import ReactQuill from 'react-quill'

import { BsArrowLeft } from "react-icons/bs"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import { EditTourAPI, getToursAPI } from "../../../API/Tour"
import { AddPathAPI, getPathAPI } from "../../../API/Path"

import AddImg from "../../../Assets/addimg.png"

import "./EditTour.scss"


const EditTour = (props) => {
    let history = useHistory()
    let params = useParams()

    const [openBox, setOpenBox] = useState(false);
    const handleClickOpen = () => {
        setOpenBox("true");
    };
    const handleClose = () => {
        setOpenBox(false);
    };

    const hidenInput1 = useRef(null)
    const hidenInput2 = useRef(null)
    const hidenInput3 = useRef(null)

    const [enteredData, setEnteredData] = useState(null)

    const [paths, setPaths] = useState([])
    const [enteredPathData, setEnteredPathData] = useState("")

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
        let res = await EditTourAPI(props.id, enteredData)
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
            toast.success("Update Tour Success", {
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
        else if (value == "2") {
            hidenInput2.current.click()
        }
        else if (value == "3") {
            hidenInput3.current.click()
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
        let res = await getToursAPI(props.id)
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

    const gettingPathData = async () => {
        let res = await getPathAPI(null, props.country)
        console.log("--------------", res);
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
            setPaths(res.data.data)
        }
    }
    const savingPathData = async () => {
        let res = await AddPathAPI({ title: enteredPathData, country: props.country })
        console.log("--------------", res);
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
            toast.success("Path Added Success", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            setTimeout(() => {
                handleClose()
                gettingPathData()
            }, 2000);
        }
    }
  
    useEffect(() => {
        gettingPathData(null, props.country)
        gettingtour()
    }, [])

    return (
        <>
         <Dialog open={openBox == "true" ? true : false} onClose={handleClose}>
                <DialogTitle>Adding Path</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To Add new Path for the Tour Please add title in the Field.
                    </DialogContentText>
                    <TextField
                        value={enteredPathData}
                        onChange={(event) => setEnteredPathData(event.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Add Path"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={savingPathData}>Save</Button>
                </DialogActions>
            </Dialog>
            <div className="edittour_container">
                <div className="title" onClick={() => history.go(0)}>
                    <BsArrowLeft /> Edit Tour
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
                                </div>
                                <div className="line">
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Image 1 </p>
                                            <div className="img" onClick={() => addImg("1")}>
                                                <img src={!enteredData.img1 ? AddImg : enteredData.img1.public} alt="ERROR" />
                                                <input ref={hidenInput1} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "img1")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Image 2 </p>
                                            <div className="img" onClick={() => addImg("2")}>
                                                <img src={!enteredData.img2 ? AddImg : enteredData.img2.public} alt="ERROR" />
                                                <input ref={hidenInput2} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "img2")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img_box">
                                        <div className="img_box">
                                            <p> Image 3 </p>
                                            <div className="img" onClick={() => addImg("3")}>
                                                <img src={!enteredData.img3 ? AddImg : enteredData.img3.public} alt="ERROR" />
                                                <input ref={hidenInput3} type="file" accept="image/png , image/jpeg" onChange={(event) => uploadingImg(event, "img3")} style={{ display: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 2 (Path , Time) </div>
                                <div className="line">
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> SelectPath : </p>
                                        <select name="path" id="path" value={enteredData.path} onChange={enteringInputData}>
                                            <option value="null">-- No Path --</option>
                                            {
                                                paths && paths.length >= 1 &&
                                                paths.map((data) => {
                                                    return (
                                                        <>
                                                            <option value={data._id}>{data.title}</option>
                                                        </>
                                                    )
                                                })

                                            }
                                        </select>
                                        <div className="btn">
                                            <button onClick={handleClickOpen}> Add Path </button>
                                        </div>
                                    </div>
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> SelectTime : </p>
                                        <select name="time" id="time" value={enteredData.time} onChange={enteringInputData}>
                                            <option value="1">1</option>
                                            <option value="2-4">2 - 4</option>
                                            <option value="5-6">5 - 6</option>
                                            <option value="8-17">8 - 17</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 3 (Map Section) </div>
                                <div className="line">
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> MapLink : </p>
                                        <input value={enteredData.mapLink} name="mapLink" onChange={enteringInputData} type="text" />
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 4 (Explore , Journey) </div>
                                <div className="line">
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> Explore : </p>
                                        <ReactQuill value={enteredData.explore} onChange={(value) => enteringQuilData(value, "explore")} />
                                    </div>
                                    <div className="input_box">
                                        <p> Journey : </p>
                                        <ReactQuill value={enteredData.journey} onChange={(value) => enteringQuilData(value, "journey")} />
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 5 (Details) </div>
                                <div className="line">
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> Start : </p>
                                        <ReactQuill value={enteredData.start} onChange={(value) => enteringQuilData(value, "start")} />
                                    </div>
                                    <div className="input_box">
                                        <p> Finish : </p>
                                        <ReactQuill value={enteredData.finish} onChange={(value) => enteringQuilData(value, "finish")} />
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="input_box" style={{ marginBottom: "3rem" }}>
                                        <p> Luggage : </p>
                                        <ReactQuill value={enteredData.luggage} onChange={(value) => enteringQuilData(value, "luggage")} />
                                    </div>
                                    <div className="input_box">
                                        <p> Discount : </p>
                                        <ReactQuill value={enteredData.discount} onChange={(value) => enteringQuilData(value, "discount")} />
                                    </div>
                                </div>
                                <div className="brack"></div>
                                <div className="heading"> SECTION 6 (Price) </div>
                                <div className="line">
                                    <div className="input_box">
                                        <p> Price : </p>
                                        <input value={enteredData.price} name="price" onChange={enteringInputData} type="text" />
                                    </div>
                                </div>
                                <div className="btn">
                                    <button onClick={updatingData}> Update Tour </button>
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