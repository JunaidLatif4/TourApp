import countryData from "./CountryData"
import tourData from "./TourData"
import placeData from "./PlaceData"
import pathData from "./PathData"

import { combineReducers } from "redux"

const allReducer = combineReducers({
    countryData,
    tourData,
    placeData,
    pathData
})

export default allReducer;