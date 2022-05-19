let localData = localStorage.getItem("CountryData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("CountryData"));

const countryData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Country":
            let data = action.data
            return (
                state = data
            )
            break;
        default:
            return state
            break;
    }
}

export default countryData