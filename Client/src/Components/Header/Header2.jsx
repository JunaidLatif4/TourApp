import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import { BsFillTelephoneFill } from "react-icons/bs"
import { BiSearchAlt2, BiBus } from 'react-icons/bi'

import Logo from "../../Assets/logo.png"
import BackImg from "../../Assets/uni.jpg"
import BlackMap from "../../Assets/black_map.png"

import { GiMountainRoad, GiRattlesnake, GiDoubleFish } from "react-icons/gi"
import { ImVine } from "react-icons/im"
import { FaMountain } from "react-icons/fa"
import { WiNightAltCloudyHigh } from "react-icons/wi"
import { AiOutlineClose } from "react-icons/ai"

import { useSelector } from "react-redux"

import "./Header.scss"

const Header = (props) => {
    let history = useHistory()

    let countryData = useSelector((state) => state.countryData)
    let tourData = useSelector((state) => state.tourData)
    console.log("-----------------------", countryData);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [selectedLink, setSelectedLink] = useState({
        id: null,
        title: null
    })
    const [selectedTours, setSelectedTour] = useState(null)

    const selectLink = (title, id) => {
        setSelectedLink({
            id: id,
            title: `Tour ${title}`
        })
    }
    const removeLink = () => {
        setSelectedLink({
            id: null,
            title: null
        })
    }

    const goToTour = (value, view) => {
        history.push({ pathname: "/list", state: { data: value, view } })
        setSelectedLink({
            id: null,
            title: null
        })
    }

    useEffect(() => {
        if (selectedLink.id) {
            let aa = tourData.filter((value) => value.country == selectedLink.id)
            setSelectedTour(aa)
            console.log("ppppppppp", aa);
        }
    }, [selectedLink])
    console.log("rrrrrrrrrrrrrrrrrrrrrrrr", selectedTours);
    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event).key === 'Tab' ||
                        (event).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            <div className="header_container">
                <div className="black_layer"></div>
                <div className="back_img"> <img src={props.img ? props.img : BackImg} alt="Error" /> </div>
                <div className="navbar_box">
                    <div className="logo" onClick={() => history.push("/")}>
                        <img src={Logo} alt="Error" />
                    </div>
                    <div className="links">
                        {
                            countryData != null ?
                                countryData.map((data, index) => {
                                    return (
                                        <>
                                            <p style={{ color: selectedLink.id == data._id ? "black" : null }} onClick={() => selectLink(data.title, data._id)} > Tour {data.title} </p>

                                        </>
                                    )
                                })
                                :
                                <>
                                    <p style={{ color: selectedLink == "scotland" ? "black" : null }} onClick={() => selectLink("scotland")} > Tour Scotland </p>
                                    <p style={{ color: selectedLink == "england" ? "black" : null }} onClick={() => selectLink("england")} > Tour England </p>
                                    <p style={{ color: selectedLink == "ireland" ? "black" : null }} onClick={() => selectLink("ireland")} > Tour Ireland </p>
                                    <p style={{ color: selectedLink == "europ" ? "black" : null }} onClick={() => selectLink("europ")} > Tour Europe </p>
                                </>
                        }
                    </div>
                    <div className="about">
                        <p>Private Tours</p>
                        <p>About Us</p>
                        <p className='icons'>
                            <span> <BiSearchAlt2 /> </span>
                            <span> <BsFillTelephoneFill /> </span>
                        </p>
                    </div>
                    {
                        selectedTours &&

                        <div style={{ display: selectedLink.id == null ? "none" : null }} className="nav_popup">
                            <p className="close" onClick={removeLink}>
                                <AiOutlineClose />
                            </p>
                            <div className="title">
                                <img src={BlackMap} alt="" /> {selectedLink.title}
                            </div>
                            <div className="boxes">

                                <div className="left_box">
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                </div>
                                <div className="right_box">
                                    <div className="heading">
                                        I'd like to see
                                    </div>
                                    <div className="destinations">
                                        {
                                            selectedTours.map((data) => {
                                                return (
                                                    <>
                                                        {/* <div className="destination_box" onClick={() => history.push({ pathname: "/list", state: { data: data, view: "tour" } })}> */}
                                                        <div className="destination_box" onClick={() => goToTour(data, "tour")}>
                                                            <img src={data.logo.public} alt="ERROR" />
                                                            {data.title}
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        {/*                                         
                                        <div className="destination_box" onClick={() => history.push("/tour")}>
                                            <p> <ImVine /> </p>
                                            Whisky Tours
                                        </div>
                                        <div className="destination_box" onClick={() => history.push("/tour")}>
                                            <p> <GiRattlesnake /> </p>
                                            Loch Ness
                                        </div>
                                        <div className="destination_box" onClick={() => history.push("/tour")}>
                                            <p> <FaMountain /> </p>
                                            Scottish Highlands
                                        </div>
                                        <div className="destination_box" onClick={() => history.push("/tour")}>
                                            <p> <GiDoubleFish /> </p>
                                            Scottish Islands
                                        </div>
                                        <div className="destination_box" onClick={() => history.push("/tour")}>
                                            <p> <WiNightAltCloudyHigh /> </p>
                                            Loch Lomond
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mbl_nav_box">
                    <div className="logo" onClick={() => history.push("/")}>
                        <img src={Logo} alt="Error" />
                    </div>
                    {/* <div>
                        <Button onClick={toggleDrawer("top", true)}>{"top"}</Button>
                        <SwipeableDrawer
                            anchor={"top"}
                            open={state["top"]}
                            onClose={toggleDrawer("top", false)}
                            onOpen={toggleDrawer("top", true)}
                        >
                            {list("top")}
                        </SwipeableDrawer>
                    </div> */}
                    <div className="phone">
                        <BsFillTelephoneFill /> +44(0) 131 226 3133
                    </div>
                </div>

                <div className="title_box">
                    {
                        props.detail ?
                            <>
                                <div className="title">
                                    {props.text}
                                </div>
                                <div className="detail">
                                    {props.detail}
                                </div>
                            </>
                            :
                            <>
                                <div className="title2">
                                    {
                                        props.tour ?
                                            <>
                                                {props.text} Tours
                                            </>
                                            :
                                            <>
                                                {props.text}
                                            </>
                                    }
                                </div>
                            </>
                    }

                </div>
                {
                    props.search &&
                    <div className="search_box">
                        <div className="heading">
                            <BiBus /> Search our small group tours
                        </div>
                        <div className="input_box">
                            <input type="text" placeholder='I want to experience...' />
                            <div className="btn">
                                <BiSearchAlt2 />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Header