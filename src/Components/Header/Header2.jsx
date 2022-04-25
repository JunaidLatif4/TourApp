import React from 'react'
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
import { BiSearchAlt2 } from 'react-icons/bi'

import Logo from "../../Assets/logo.png"
import BackImg from "../../Assets/uni.jpg"

import "./Header.scss"

const Header = (props) => {
    let history = useHistory()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
                <div className="back_img"> <img src={BackImg} alt="Error" /> </div>
                <div className="navbar_box">
                    <div className="logo" onClick={() => history.push("/")}>
                        <img src={Logo} alt="Error" />
                    </div>
                    <div className="links">
                        <p> Tour Scotland </p>
                        <p> Tour England </p>
                        <p> Tour Ireland </p>
                        <p> Tour Europe </p>
                    </div>
                    <div className="about">
                        <p>Private Tours</p>
                        <p>About Us</p>
                        <p className='icons'>
                            <span> <BiSearchAlt2 /> </span>
                            <span> <BsFillTelephoneFill /> </span>
                        </p>
                    </div>
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
                        <>
                            <div className="title2">
                                {props.text}
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Header