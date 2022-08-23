import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from './Screens/Home/Home'
import Checkout from './Screens/Checkout/Checkout';
import TourDetails from './Screens/TourDetails/TourDetails';
import ListPage from "./Screens/ListPage/ListPage"
import Dashbaord from "./Screens/Dashboard/Dashboard"
import Login from './Screens/Dashboard/Login/Login'

import { ToastContainer, toast } from 'react-toastify';
import { getCountriesAPI } from './API/country';
import { getPlaceAPI } from './API/Place';
import { getToursAPI } from './API/Tour';
import { getPathAPI } from './API/Path';
import { useDispatch } from "react-redux"
import { addCountryData } from "./GlobalStore/actions/addCountry"
import { addTourData } from "./GlobalStore/actions/addTour"
import { addPlaceData } from "./GlobalStore/actions/addPlace"
import { addPathData } from "./GlobalStore/actions/addPath"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Search from './Screens/Search/Search';


const App = () => {
    let dispatch = useDispatch()

    const gettingCountries = async () => {
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
            localStorage.setItem("CountryData", JSON.stringify(res.data.data))
            dispatch(addCountryData(res.data.data))
        }
    }
    const gettingPlaces = async () => {
        let res = await getPlaceAPI()
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
            localStorage.setItem("PlaceData", JSON.stringify(res.data.data))
            dispatch(addPlaceData(res.data.data))
        }
    }
    const gettingPath = async () => {
        let res = await getPathAPI()
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
            localStorage.setItem("PathData", JSON.stringify(res.data.data))
            dispatch(addPathData(res.data.data))
        }
    }
    const gettingTours = async () => {
        let res = await getToursAPI()
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
            localStorage.setItem("TourData", JSON.stringify(res.data.data))
            dispatch(addTourData(res.data.data))
        }
    }
    useEffect(() => {
        gettingCountries()
        gettingPlaces()
        gettingTours()
        gettingPath()
    })

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
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/list"} component={ListPage} />
                <Route path={"/search"} component={Search} />
                <Route path={"/tour/:id"} component={TourDetails} />
                <Route path={"/checkout"} component={Checkout} />
                <Route path={"/dashboard"} component={Dashbaord} />
                <Route path={"/login"} component={Login} />
            </Switch>
        </>
    )
}

export default App