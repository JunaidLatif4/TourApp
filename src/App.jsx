import React from 'react'
import { Switch, Route } from "react-router-dom"

import Home from './Screens/Home/Home'
import Checkout from './Screens/Checkout/Checkout';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home2 from './Screens/Home/Home2';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path={"/"} component={Home2} />
                <Route path={"/tour"} component={Home} />
                <Route path={"/checkout"} component={Checkout} />
            </Switch>
        </>
    )
}

export default App