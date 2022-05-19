import countryData from "./CountryData"
import tourData from "./TourData"

import { combineReducers } from "redux"

const allReducer = combineReducers({
    countryData,
    tourData
})

export default allReducer;