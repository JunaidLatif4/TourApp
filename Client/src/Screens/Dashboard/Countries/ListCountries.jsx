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
import { deleteCountriesAPI, getCountriesAPI } from "../../../API/country"
import "./ListCountries.scss"


function createData(
    title,
    tours
) {
    return { title, tours };
}

const ListCountries = (props) => {
    let history = useHistory()

    const [countries, setCountries] = useState(null)
    const [rows, setRows] = useState([])

    const editCountry = (value) => {
        props.changeView("edit", value)
        // history.push(`/dashboard/country/edit/${value}`)
    }
    const deleteCountry = async (value) => {
        if (window.confirm("Press OK to delete Country") == true) {
            let res = await deleteCountriesAPI(value)
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
                toast.success("Country Deleted Success", {
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
    const addCountry = (value) => {
        props.changeView("add", null)
        // history.push(`/dashboard/country/edit/${value}`)
    }

    let gettingCountries = async () => {
        let res = await getCountriesAPI()
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
            setCountries(res.data.data)
        }
    }


    useEffect(() => {
        gettingCountries()
    }, [])
    useEffect(() => {
        if (countries != null && countries.length >= 1) {
            countries.map((data) => {
                setRows((preValue) => {
                    return [
                        ...preValue,
                        createData(data.title, data._id),
                    ]
                })
            })
        }
    }, [countries])

    return (
        <>
            <div className="listtours_container">
                <div className="heading">
                    <p> Countries List</p>
                    <p className="add" onClick={addCountry}>
                        <CgAddR /> Add Country
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
                                                    <TableCell align="center">Tours</TableCell>
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
                                                        <TableCell align="center"> <NavLink to={`/dashboard/country/tour/${row.tours}`} > View Tours </NavLink> </TableCell>
                                                        <TableCell align="right"> <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }}> <span style={{ cursor: "pointer" }} onClick={() => editCountry(row.tours)}> <MdEdit /> </span> <span style={{ cursor: "pointer" }} onClick={() => deleteCountry(row.tours)}> <MdDelete /> </span></div> </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                                :
                                <>
                                    <div className="no_data" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        No Country Found
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

export default ListCountries