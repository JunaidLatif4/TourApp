import React, { useState } from 'react'



import { CgAddR } from "react-icons/cg"
import 'react-quill/dist/quill.snow.css';

import AddBlog from './AddBlog';
import ListBlogs from './ListBlogs';
import EditBlog from './EditBlog';


import "./Blogs.scss"



const Blogs = () => {

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
                        All Blogs
                    </div>
                    {/* <div className="add" onClick={() => changeView("add")}>
                        <CgAddR /> Add Country
                    </div> */}
                </div>
                <div className="tours_box">

                    {
                        currentView.div == "list" ?
                            <ListBlogs changeView={changeView} />
                            :
                            currentView.div == "add" ?
                                <AddBlog />
                                :
                                currentView.div == "edit" ?
                                    <EditBlog id={currentView.value} />
                                    :
                                    null
                    }
                </div>

            </div>
        </>
    )
}

export default Blogs