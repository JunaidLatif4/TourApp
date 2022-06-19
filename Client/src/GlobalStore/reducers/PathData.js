let localData = localStorage.getItem("PathData")
var initialState = localData == null ? null : JSON.parse(localStorage.getItem("PathData"));

const pathData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Path":
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

export default pathData