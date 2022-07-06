import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Progress from "@mui/material/CircularProgress"
import { MdEdit, MdDelete } from "react-icons/md"
import { CgAddR } from "react-icons/cg"

import { ToastContainer, toast } from 'react-toastify';
import { getToursAPI, deleteTourAPI } from "../../../API/Tour"

import "./ListTours.scss"


function createData(
    title,
    path,
    time,
    tour
) {
    return { title, path, time, tour };
}

const ListTours = (props) => {
    let history = useHistory()

    const [tours, setTours] = useState(null)
    const [rows, setRows] = useState([])

    const editTour = (value) => {
        props.changeView("edit", value)
    }
    const deleteTour = async (value) => {
        if (window.confirm("Press OK to delete Country") == true) {
            let res = await deleteTourAPI(value)
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
                toast.success("Tour Deleted Success", {
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
    }
    const addTour = (value) => {
        props.changeView("add", null)
    }

    let gettingtours = async () => {
        let res = await getToursAPI(null, props.id)
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
            setTours(res.data.data)
        }
    }

    useEffect(() => {
        gettingtours()
    }, [])
    useEffect(() => {
        if (tours != null && tours.length >= 1) {
            tours.map((data) => {
                setRows((preValue) => {
                    return [
                        ...preValue,
                        createData(data.title, data.path.title, data.time, data._id),
                    ]
                })
            })
        }
    }, [tours])

    return (
        <>
            <div className="listtours_container">
                <div className="heading">
                    <p> Tours List </p>
                    <p className="add" onClick={addTour}>
                        <CgAddR /> Add Tour
                    </p>
                </div>
                <div className="tours">
                    {
                        rows != null ?
                            rows.length >= 1 ?
                                <>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Title</TableCell>
                                                    <TableCell align="center">Path</TableCell>
                                                    <TableCell align="center">Time</TableCell>
                                                    <TableCell align="right">Options</TableCell> 
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell align="center"> {row.path} </TableCell>
                                                        <TableCell align="center"> {row.time} </TableCell>
                                                        <TableCell align="right"> <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }}> <span style={{ cursor: "pointer" }} onClick={() => editTour(row.tour)}> <MdEdit /> </span> <span style={{ cursor: "pointer" }} onClick={() => deleteTour(row.tour)}> <MdDelete /> </span></div> </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                                :
                                <>
                                    <div className="no_data" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        No Tour Found
                                    </div>
                                </>
                            :
                            <>
                                <Progress />
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default ListTours