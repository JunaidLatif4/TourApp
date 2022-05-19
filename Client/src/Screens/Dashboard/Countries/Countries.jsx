import React, { useState } from 'react'



import { CgAddR } from "react-icons/cg"
import 'react-quill/dist/quill.snow.css';
import "./Countries.scss"

import AddCountry from './AddCountry';
import ListCountries from './ListCountries';
import EditCountry from './EditCountry';





const Countries = () => {

    const [currentView, setCurrentView] = useState({
        div: "list",
        value: null
    })

    const changeView = (view, id) => {
        setCurrentView({
            div: view,
            value: id
        })
    }

    return (
        <>
            <div className="tours_container">
                <div className="tour_header">
                    <div className="title">
                        All Countries
                    </div>
                    {/* <div className="add" onClick={() => changeView("add")}>
                        <CgAddR /> Add Country
                    </div> */}
                </div>
                <div className="tours_box">

                    {
                        currentView.div == "list" ?
                            <ListCountries changeView={changeView} />
                            :
                            currentView.div == "add" ?
                                <AddCountry />
                                :
                                currentView.div == "edit" ?
                                    <EditCountry id={currentView.value} />
                                    :
                                    null
                    }
                </div>

            </div>
        </>
    )
}

export default Countries