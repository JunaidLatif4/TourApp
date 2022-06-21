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

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { BsFillTelephoneFill } from "react-icons/bs"
import { BiSearchAlt2, BiBus } from 'react-icons/bi'

import Logo from "../../Assets/logo.png"
import BackImg from "../../Assets/back.jpg"
import BlackMap from "../../Assets/black_map.png"

import { GiMountainRoad, GiRattlesnake, GiDoubleFish } from "react-icons/gi"
import { ImVine } from "react-icons/im"
import { FaMountain } from "react-icons/fa"
import { WiNightAltCloudyHigh } from "react-icons/wi"
import { AiOutlineClose } from "react-icons/ai"

import { useSelector } from "react-redux"

import "./Header.scss"




const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: ``,
    margin: "0",
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        "transparent",
    border: "none",
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    padding: "0 10px",
    margin: "0",
    '& .MuiAccordionSummary-content': {
        margin: "0",
        // marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    // padding: theme.spacing(2),
    '& li': {
        color: "#6DAAA2",
        fontSize: "medium",
        margin: "5px 0",
        marginLeft: "10px",
        cursor: "pointer",
    },
    borderTop: 'none',
}));

const Header = (props) => {
    let history = useHistory()

    let countryData = useSelector((state) => state.countryData)
    let placeData = useSelector((state) => state.placeData)
    let tourData = useSelector((state) => state.tourData)
    let pathData = useSelector((state) => state.pathData)

    const [expanded, setExpanded] = React.useState('flase');
    const [expanded2, setExpanded2] = React.useState('flase');

    const [showMenu, setShowMenu] = useState(false)
    
    const handleChange =
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };
    const handleChange2 =
        (panel) => (event, newExpanded) => {
            setExpanded2(newExpanded ? panel : false);
        };

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
    const [selectedPlace, setSelectedPlace] = useState(null)
    const [selectedPath, setSelectedPath] = useState(null)
    const [selectedTour, setSelectedTour] = useState(null)
    const [tourTImes, setToureTimes] = useState(["1", "2-4", "5-6", "8-17"])

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

    const goToPlace = (value, view) => {
        history.push({ pathname: "/list", state: { data: value, view } })
        setSelectedLink({
            id: null,
            title: null
        })
    }
    const goToTour = (id) => {
        history.push(`/tour/${id}`)
        setSelectedLink({
            id: null,
            title: null
        })
    }

    useEffect(() => {
        if (selectedLink.id) {
            let aa = placeData.filter((value) => value.country == selectedLink.id)
            setSelectedPlace(aa)
            let findPaths = pathData.filter((value) => value.country._id == selectedLink.id)
            setSelectedPath(findPaths)
            let findTours = tourData.filter((value) => value.country == selectedLink.id)
            setSelectedTour(findTours)
        }
    }, [selectedLink])

    const togelMenu = () => {
        setShowMenu(!showMenu)
        setSelectedLink({
            id: null,
            title: null
        })
        setExpanded("false")
        setExpanded2("false")
    }

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
            <div className="header_container2">
                <div className="navbar_container">
                    <div className="navbar_box">
                        <div className="logo" onClick={() => history.push("/")}>
                            <img src={Logo} alt="Error" />
                        </div>
                        <div className="links">
                        {
                                countryData != null ?
                                    countryData.map((data, index) => {
                                        return (
                                            index <= 3 &&
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
                            selectedPlace &&

                            <div style={{ display: selectedLink.id == null ? "none" : null }} className="nav_popup">
                                <p className="close" onClick={removeLink}>
                                    <AiOutlineClose />
                                </p>
                                <div className="title">
                                    <img src={BlackMap} alt="" /> {selectedLink.title}
                                </div>
                                <div className="boxes">

                                    <div className="left_box">
                                        {
                                            selectedPath &&
                                            selectedPath.map((path) => {
                                                return (
                                                    selectedTour.filter((value) => value.path == path._id).length >= 1 &&
                                                    <>
                                                        <Accordion expanded={expanded === `${path._id}`} onChange={handleChange(`${path._id}`)}>
                                                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                                <Typography>Tour from {path.title} </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                {
                                                                    tourTImes.map((time) => {
                                                                        return (
                                                                            selectedTour.filter((value) => value.path == path._id && value.time == time).length >= 1 &&
                                                                            <>
                                                                                <Accordion expanded={expanded2 === `${time}`} onChange={handleChange2(`${time}`)}>
                                                                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                                                        <Typography><li>
                                                                                            {time} day tours from Edinburg
                                                                                        </li></Typography>
                                                                                    </AccordionSummary>
                                                                                    <AccordionDetails>
                                                                                        {
                                                                                            selectedTour.filter((value) => value.path == path._id && value.time == time).map((data) => {
                                                                                                return (
                                                                                                    <>
                                                                                                        <li onClick={() => goToTour(data._id)}>
                                                                                                            {data.title}
                                                                                                        </li>
                                                                                                    </>
                                                                                                )
                                                                                            })

                                                                                        }
                                                                                    </AccordionDetails>
                                                                                </Accordion>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="right_box">
                                        <div className="heading">
                                            I'd like to see
                                        </div>
                                        <div className="destinations">
                                            {
                                                selectedPlace.map((data) => {
                                                    return (
                                                        <>
                                                            <div className="destination_box" onClick={() => goToPlace(data, "tour")}>
                                                                <img src={data.logo.public} alt="ERROR" />
                                                                {data.title}
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

               <div className="mbl_nav_box">
                    <div className="logo" onClick={() => history.push("/")}>
                        <img src={Logo} alt="Error" />
                    </div>
                    <div className="phone">
                        <BsFillTelephoneFill /> +44(0) 131 226 3133
                    </div>
                    <div className="btn" onClick={togelMenu}>
                        MENU
                    </div>
                    <div className={showMenu ? `detail_box toggle` : "detail_box"}>
                        <div className="country_box">

                            {
                                countryData != null ?
                                    countryData.map((data, index) => {
                                        return (
                                            index <= 3 &&
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
                        {
                            selectedLink.id != null &&
                            <>
                                <div className="break"></div>

                                <div className="see_container">
                                    <p className='heading'> I'd like to see </p>
                                    {
                                        selectedPlace &&
                                    <div className="see_box">
                                        {
                                            selectedPlace.map((data) => {
                                                return (
                                                    <>
                                                        <div className="destination_box" onClick={() => goToPlace(data, "tour")}>
                                                            <img src={data.logo.public} alt="ERROR" />
                                                            {data.title}
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                        }
                                </div>
                                <div className="break"></div>
                                <div className="list_box">
                                    {
                                        selectedPath &&
                                        selectedPath.map((path) => {
                                            return (
                                                selectedTour.filter((value) => value.path == path._id).length >= 1 &&
                                                <>
                                                    <Accordion expanded={expanded === `${path._id}`} onChange={handleChange(`${path._id}`)}>
                                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                            <Typography>Tour from {path.title} </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            {
                                                                tourTImes.map((time) => {
                                                                    return (
                                                                        selectedTour.filter((value) => value.path == path._id && value.time == time).length >= 1 &&
                                                                        <>
                                                                            <Accordion expanded={expanded2 === `${time}`} onChange={handleChange2(`${time}`)}>
                                                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                                                    <Typography><li>
                                                                                        {time} day tours from Edinburg
                                                                                    </li></Typography>
                                                                                </AccordionSummary>
                                                                                <AccordionDetails>
                                                                                    {
                                                                                        selectedTour.filter((value) => value.path == path._id && value.time == time).map((data) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <li onClick={() => goToTour(data._id)}>
                                                                                                        {data.title}
                                                                                                    </li>
                                                                                                </>
                                                                                            )
                                                                                        })

                                                                                    }
                                                                                </AccordionDetails>
                                                                            </Accordion>

                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header