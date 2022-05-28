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
    let tourData = useSelector((state) => state.tourData)
    console.log("-----------------------", countryData);

    const [expanded, setExpanded] = React.useState('flase');
    const [expanded2, setExpanded2] = React.useState('flase');

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
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Tour from Edinburgh </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Accordion expanded={expanded2 === 'panel1-1'} onChange={handleChange2('panel1-1')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        1 day tours from Edinburg
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel1-2'} onChange={handleChange2('panel1-2')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        2 - 4 day tours from Edinburg
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel1-3'} onChange={handleChange2('panel1-3')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        5 - 6 day tours from Edinburg
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel1-4'} onChange={handleChange2('panel1-4')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        8 - 17 day tours from Edinburg
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Tour from Glasgow </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Accordion expanded={expanded2 === 'panel2-1'} onChange={handleChange2('panel2-1')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        1 day tours from Glasgow
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li onClick={() => history.push("/tour")}>
                                                        The Cotswolds
                                                    </li>

                                                    <li onClick={() => history.push("/tour")}>
                                                        Dingle Peninsula
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel2-2'} onChange={handleChange2('panel2-2')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        2 - 4 day tours from Glasgow
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li onClick={() => history.push("/tour")}>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel2-3'} onChange={handleChange2('panel2-3')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        5 - 6 day tours from Glasgow
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li onClick={() => history.push("/tour")}>
                                                        The Cotswolds
                                                    </li>
                                                    <li onClick={() => history.push("/tour")}>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel2-4'} onChange={handleChange2('panel2-4')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        8 - 17 day tours from Glasgow
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li onClick={() => history.push("/tour")}>
                                                        The Cotswolds
                                                    </li>

                                                    <li onClick={() => history.push("/tour")}>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li onClick={() => history.push("/tour")}>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Tour from Inverness </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Accordion expanded={expanded2 === 'panel3-1'} onChange={handleChange2('panel3-1')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        1 day tours from Inverness
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel3-2'} onChange={handleChange2('panel3-2')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        2 - 4 day tours from Inverness
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel3-3'} onChange={handleChange2('panel3-3')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        5 - 6 day tours from Inverness
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel3-4'} onChange={handleChange2('panel3-4')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        8 - 17 day tours from Inverness
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Tour from Aberdeen </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Accordion expanded={expanded2 === 'panel4-1'} onChange={handleChange2('panel4-1')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        1 day tours from Aberdeen
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel4-2'} onChange={handleChange2('panel4-2')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        2 - 4 day tours from Aberdeen
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel4-3'} onChange={handleChange2('panel4-3')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        5 - 6 day tours from Aberdeen
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded2 === 'panel4-4'} onChange={handleChange2('panel4-4')}>
                                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography><li>
                                                        8 - 17 day tours from Aberdeen
                                                    </li></Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <li>
                                                        The Cotswolds
                                                    </li>

                                                    <li>
                                                        Dingle Peninsula
                                                    </li>
                                                    <li>
                                                        Lake District
                                                    </li>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionDetails>
                                    </Accordion>


                                    {/* <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p>
                                    <p onClick={() => history.push("/tour")} >Tour Scotland + </p> */}
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