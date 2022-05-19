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

import "./ListBookings.scss"


function createData(
    id,
    firstName,
    lastName,
    tour
) {
    return { id, firstName, lastName, tour };
}

const ListBookings = (props) => {
    let history = useHistory()

    let bookings = props.data
    const [rows, setRows] = useState(null)

    const editBooking = (value) => {
        props.changeView("edit", value)
    }
    const deleteBooking = async (value) => {
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

    useEffect(() => {
        if (bookings.length >= 1) {
            setRows(
                bookings.map((data) => createData(data._id, data.firstName, data.lastName, data.tour))
            )
        } else {
            setRows([])
        }
    }, [])

    return (
        <>
            <div className="listbookings_container">
                <div className="heading">

                    <p> Bookings List </p>
                    {/* <p className="add" onClick={addTour}>
                        <CgAddR /> Add Tour
                    </p> */}
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
                                                    <TableCell>No.</TableCell>
                                                    <TableCell align="left">FirstName</TableCell>
                                                    <TableCell align="left">LastName</TableCell>
                                                    <TableCell align="left">Tour</TableCell>
                                                    <TableCell align="right">Options</TableCell>
                                                    {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row, index) => (
                                                    <TableRow
                                                        key={row._id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {index + 1}
                                                        </TableCell>
                                                        <TableCell align="left"> {row.firstName} </TableCell>
                                                        <TableCell align="left"> {row.lastName} </TableCell>
                                                        <TableCell align="left"> {row.tour.title} </TableCell>
                                                        {/* <TableCell align="right"> <span onClick={() => editTour(row.tours)}> <MdEdit /> </span> <span onClick={() => editTour(row.tours)}> <MdDelete /> </span> </TableCell> */}
                                                        <TableCell align="right"> <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }}> <span style={{ cursor: "pointer" }} onClick={() => editBooking(row.tours)}> <MdEdit /> </span> <span style={{ cursor: "pointer" }} onClick={() => deleteBooking(row.tours)}> <MdDelete /> </span></div> </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                                :
                                <>
                                    <div className="no_data" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        No Bookings Found
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

export default ListBookings