import React from 'react'
import { Switch, Route } from "react-router-dom"

import Home from './Screens/Home/Home'
import Checkout from './Screens/Checkout/Checkout';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/checkout"} component={Checkout} />
            </Switch>
        </>
    )
}

export default App