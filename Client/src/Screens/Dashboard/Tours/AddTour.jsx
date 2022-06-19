import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactQuill from 'react-quill'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { BsArrowLeft } from "react-icons/bs"

import { ToastContainer, toast } from 'react-toastify';
import { AddTourAPI } from "../../../API/Tour"
import { AddPathAPI, getPathAPI } from "../../../API/Path"

import "./AddTour.scss"


const AddTour = (props) => {
    let history = useHistory()

    const [openBox, setOpenBox] = useState(false);
    const handleClickOpen = () => {
        setOpenBox("true");
    };
    const handleClose = () => {
        setOpenBox(false);
    };

    const [enteredData, setEnteredData] = useState({
        country: props.country,
        title: "",
        img1: "",
        img2: "",
        img3: "",
        mapLink: "",
        explore: "",
        journey: "",
        start: "",
        finish: "",
        luggage: "",
        discount: "",
        price: "",
        time: "1",
        path: "null",
    })


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
        let res = await AddTourAPI(enteredData)
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
            toast.success("Tour Added Success", {
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
            <div className="addtour_container">
                <div className="title" onClick={() => history.go(0)}>
                    <BsArrowLeft /> Add Tour
                </div>
                <div className="tour_form">
                    <div className="heading"> SECTION 1 (Poster Section) </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Title : </p>
                            <input value={enteredData.title} name="title" onChange={enteringInputData} type="text" />
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Poster IMG 1 </p>
                            <input style={{ fontSize: "small" }} name="img1" onChange={enteringImgData} type="file" />
                        </div>
                        <div className="input_box">
                            <p> Poster IMG 2 </p>
                            <input style={{ fontSize: "small" }} name="img2" onChange={enteringImgData} type="file" />
                        </div>
                        <div className="input_box">
                            <p> Poster IMG 3 </p>
                            <input style={{ fontSize: "small" }} name="img3" onChange={enteringImgData} type="file" />
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
                        <button onClick={savingData}> Add Tour </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTour