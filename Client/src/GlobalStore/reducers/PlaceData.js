let localData = localStorage.getItem("PlaceData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("PlaceData"));

const placeData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Place":
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

export default placeData