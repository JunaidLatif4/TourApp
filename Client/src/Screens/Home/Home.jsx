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
import Look from '../../Components/Look/Look'
import Partner from '../../Components/Partner/Partner'
import Pay from '../../Components/Pay/Pay'

import Logo from "../../Assets/logo.png"

import Award from './Components/Award/Award';
import Tour from './Components/Tour/Tour';
import Dragon from './Components/Dragon/Dragon';
import Insta from './Components/Insta/Insta';


import './Home.scss'



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
            <Header text="Find Your Escape." search={true} />
            <div className="home_container">
                <Award />
                <Tour />
                {/* <Dragon /> */}
                <Insta />
            </div>
            {/* <Partner /> */}
            <Look />
            <Footer />
            {/* <Pay /> */}
        </>
    )
}

export default Home2