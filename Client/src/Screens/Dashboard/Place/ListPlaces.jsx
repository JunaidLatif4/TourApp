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
import { getPlaceAPI, deletePlaceAPI } from "../../../API/Place"

import "./ListPlaces.scss"


function createData(
    title,
    place
) {
    return { title, place };
}

const ListTours = (props) => {
    let history = useHistory()

    const [places, setPlaces] = useState(null)
    const [rows, setRows] = useState([])

    const editTour = (value) => {
        props.changeView("edit", value)
    }
    const deleteTour = async (value) => {
        if (window.confirm("Press OK to delete Place") == true) {
            let res = await deletePlaceAPI(value)
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
                toast.success("Place Deleted Success", {
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
        let res = await getPlaceAPI(null, props.id)
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
            setPlaces(res.data.data)
        }
    }

    useEffect(() => {
        gettingtours()
    }, [])
    useEffect(() => {
        if (places != null && places.length >= 1) {
            places.map((data) => {
                setRows((preValue) => {
                    return [
                        ...preValue,
                        createData(data.title, data._id),
                    ]
                })
            })
        }
    }, [places])

    return (
        <>
            <div className="listtours_container">
                <div className="heading">

                    <p> Places List </p>
                    <p className="add" onClick={addTour}>
                        <CgAddR /> Add Place
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
                                                    {/* <TableCell align="right">Tours</TableCell> */}
                                                    <TableCell align="right">Options</TableCell>
                                                    {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
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
                                                        {/* <TableCell align="right"> <NavLink to={`/dashboard/country/tour/${row.tours}`} > View Tours </NavLink> </TableCell> */}
                                                        {/* <TableCell align="right"> <span onClick={() => editTour(row.tours)}> <MdEdit /> </span> <span onClick={() => editTour(row.tours)}> <MdDelete /> </span> </TableCell> */}
                                                        <TableCell align="right"> <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }}> <span style={{ cursor: "pointer" }} onClick={() => editTour(row.place)}> <MdEdit /> </span> <span style={{ cursor: "pointer" }} onClick={() => deleteTour(row.place)}> <MdDelete /> </span></div> </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                                :
                                <>
                                    <div className="no_data" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        No Place Found
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