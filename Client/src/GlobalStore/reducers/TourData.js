let localData = localStorage.getItem("TourData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("TourData"));

const tourData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Tour":
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

export default tourData