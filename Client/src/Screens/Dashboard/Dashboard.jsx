import React from 'react'
import { Switch, Route, useHistory } from "react-router-dom"

import SideBar from './SideBar/SideBar'

import { ToastContainer, toast } from 'react-toastify';

import Countries from "./Countries/Countries"
import Places from './Place/Places'
import Tours from './Tours/Tours'
import EditCountry from "./Countries/EditCountry"
import Login from './Login/Login'
import Booking from './Booking/Booking';

import "./Dashboard.scss"

const Dashboard = () => {
    let history = useHistory()

    let AdminUser = localStorage.getItem("adminData")
    if (!AdminUser) {
        history.push("/")
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <div className="dashboard_container">
                <SideBar />
                <Switch>
                    {/* <Route exact path={`/dashboard`} component={Login} /> */}
                    <Route exact path="/dashboard/country" component={Countries} />
                    <Route path="/dashboard/booking" component={Booking} />
                    <Route path="/dashboard/country/place/:id" component={Places} />
                    <Route path="/dashboard/country/tour/:id" component={Tours} />
                </Switch>
                {/* <Tours /> */}
            </div>
        </>
    )
}

export default Dashboard