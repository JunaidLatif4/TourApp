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
import { deleteBlogsAPI, getBlogsAPI } from "../../../API/Blogs"

import "./ListBlogs.scss"


function createData(
    title,
    author,
    category,
    id
) {
    return { title, author , category , id };
}

const ListBlogs = (props) => {
    let history = useHistory()

    const [blogs, setBlogs] = useState(null)
    const [rows, setRows] = useState([])

    const editBlog = (value) => {
        props.changeView("edit", value)
        // history.push(`/dashboard/country/edit/${value}`)
    }
    const deleteBlog = async (value) => {
        if (window.confirm("Press OK to delete Blog") == true) {
            let res = await deleteBlogsAPI(value)
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
                toast.success("Blog Deleted Success", {
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
    const addBlog = (value) => {
        props.changeView("add", null)
        // history.push(`/dashboard/country/edit/${value}`)
    }

    let gettingBlogs = async () => {
        let res = await getBlogsAPI()
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
            setBlogs(res.data.data)
        }
    }


    useEffect(() => {
        gettingBlogs()
    }, [])
    useEffect(() => {
        if (blogs != null && blogs.length >= 1) {
            blogs.map((data) => {
                setRows((preValue) => {
                    return [
                        ...preValue,
                        createData(data.title, data.author , data.category , data._id),
                    ]
                })
            })
        }
    }, [blogs])

    return (
        <>
            <div className="listtours_container">
                <div className="heading">
                    <p> Blogs List</p>
                    <p className="add" onClick={addBlog}>
                        <CgAddR /> Add Blog
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
                                                    <TableCell align="center">Category</TableCell>
                                                    <TableCell align="center">Author</TableCell>
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
                                                        <TableCell align="center"> {row.category} </TableCell>
                                                        <TableCell align="center"> {row.author} </TableCell>
                                                        <TableCell align="right"> <div style={{ display: "flex", gap: ".5rem", justifyContent: "end" }}> <span style={{ cursor: "pointer" }} onClick={() => editBlog(row.id)}> <MdEdit /> </span> <span style={{ cursor: "pointer" }} onClick={() => deleteBlog(row.id)}> <MdDelete /> </span></div> </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </>
                                :
                                <>
                                    <div className="no_data" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        No Blog Found
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

export default ListBlogs