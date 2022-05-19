import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CgAddR } from "react-icons/cg"

// import AddTour from './AddTour';
import ListBookings from './ListBookings';
// import EditTour from './EditTour';

import { ToastContainer, toast } from 'react-toastify';
import { getBookingAPI } from "../../../API/Booking"

import 'react-quill/dist/quill.snow.css';
import "./Booking.scss"
import { CircularProgress } from '@mui/material';





const Booking = () => {

    const [currentView, setCurrentView] = useState({
        div: "list",
        value: null
    })
    const [bookingData, setBookingData] = useState(null)

    const changeView = (view, id) => {
        setCurrentView({
            div: view,
            value: id
        })
    }


    let gettingBooking = async () => {
        let res = await getBookingAPI()
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
            setBookingData(res.data.data)
        }
    }

    useEffect(() => {
        gettingBooking()
    }, [])

    return (
        <>
            <div className="booking_container">
                {
                    bookingData != null ?
                        <>
                            <div className="tour_header">
                                <div className="title">
                                    All bookings
                                </div>
                                {/* <div className="add" onClick={() => changeView("add")}>
                                    <CgAddR /> Add Tour
                                </div> */}
                            </div>
                            <div className="tours_box">

                                {
                                    currentView.div == "list" ?
                                        <ListBookings data={bookingData} changeView={changeView} />
                                        // :
                                        // currentView.div == "add" ?
                                        //     <AddTour country={bookingData._id} />
                                        //     :
                                        //     currentView.div == "edit" ?
                                        //         <EditTour id={currentView.value} />
                                        :
                                        null
                                }
                            </div>
                        </>
                        :
                        <>
                            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", width: "-webkit-fill-available" }}>
                                <CircularProgress />
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default Booking