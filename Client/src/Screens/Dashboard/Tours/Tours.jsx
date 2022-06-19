import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CircularProgress } from '@mui/material';

import { CgAddR } from "react-icons/cg"

import AddTour from './AddTour';
import ListTours from './ListTours';
import EditTour from './EditTour';

import { ToastContainer, toast } from 'react-toastify';
import { getCountriesAPI } from "../../../API/country"

import 'react-quill/dist/quill.snow.css';
import "./Tours.scss"





const Tours = () => {

    let params = useParams()

    const [currentView, setCurrentView] = useState({
        div: "list",
        value: null
    })
    const [countryData, setCountryData] = useState(null)

    const changeView = (view, id) => {
        setCurrentView({
            div: view,
            value: id
        })
    }


    let gettingCountry = async () => {
        let res = await getCountriesAPI(params.id)
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
            setCountryData(res.data.data)
        }
    }

    useEffect(() => {
        gettingCountry()
    }, [])

    return (
        <>
            <div className="tours_container">
                {
                    countryData != null ?
                        <>
                            <div className="tour_header">
                                <div className="title">
                                    {countryData.title}
                                </div>
                                {/* <div className="add" onClick={() => changeView("add")}>
                                    <CgAddR /> Add Tour
                                </div> */}
                            </div>
                            <div className="tours_box">

                                {
                                    currentView.div == "list" ?
                                        <ListTours id={countryData._id} changeView={changeView} />
                                        :
                                        currentView.div == "add" ?
                                            <AddTour country={countryData._id} />
                                            :
                                            currentView.div == "edit" ?
                                                <EditTour id={currentView.value} country={countryData._id} />
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

export default Tours