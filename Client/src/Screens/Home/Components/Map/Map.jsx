import React from 'react'

import "./Map.scss"
const Map = () => {
    return (
        <>
            <div className="map_container">
                <p className="heading"> Tour map </p>
            <iframe src="https://www.google.com/maps/d/embed?mid=1YvPwGaINljKuxmpgnbZoCVZIQpc" width="100%" height="350"></iframe>
            </div>
        </>
    )
}

export default Map