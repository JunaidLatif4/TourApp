import React from 'react'

import Footer from '../../Components/Footer/Footer'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineClose as CloseIcon } from "react-icons/ai"
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import Header from '../../Components/Header/Header2'
import Book from './Components/BookForm/Book'
import MobileBook from './Components/MobileBooking/MobileBooking'
import High from './Components/High/High'
import Journey from './Components/Journey/Journey'
import Look from './Components/Look/Look'
import Map from './Components/Map/Map'
import Partner from './Components/Partner/Partner'
import Pay from './Components/Pay/Pay'
import Reasons from './Components/Reasons/Reasons'
import Slider from './Components/Slider/Slider'

import Logo from "../../Assets/logo.png"

import './Home.scss'
import './Home2.scss'
import Award from './Components/Award/Award';
import Tour from './Components/Tour/Tour';
import Dragon from './Components/Dragon/Dragon';
import Insta from './Components/Insta/Insta';





const Transition = React.forwardRef(function Transition(
    props,
    ref,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Home2 = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="mbl_booking">
                <button onClick={handleClickOpen}> View Dates </button>
            </div>
            <Header text="Go beyond the guidebooks." />
            <div className="home_container2">
                <Award />
                <Tour />
                <Dragon />
                <Insta />
            </div>
            <Partner />
            <Look />
            <Footer />
            <Pay />

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div className="mbl_booking_box">
                    <div className="mbl_nav_box">
                        <div className="logo">
                            <img src={Logo} alt="Error" />
                        </div>

                        <span onClick={handleClose}> <CloseIcon /> </span>
                    </div>
                    <MobileBook />
                </div>
            </Dialog>
        </>
    )
}

export default Home2