import axios from "../axiosInstance"

const getPlaceAPI = async (id = null , country = null) => {
    console.log("API -============ " , id , country);
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: id != null ? `place/?id=${id}` : country != null ? `place/?country=${country}` : `/place`,
            method: "GET",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            // withCredentials: true

        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data
        } else {
            resolved.error.message = "SomeThing went Wrong"
        }

    }

    return resolved;
}

const AddPlaceAPI = async (data) => {
    let resolved = {
        data: null,
        error: null
    }

    let formData = new FormData()

    let process = Object.keys(data).map((key) => {
        formData.append(`${key}`, data[key])
    })
    await Promise.all(process)


    try {
        const res = await axios({
            url: `place/`,
            method: "POST",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            data: formData
            // withCredentials: true

        })
        resolved.data = res.data
    } catch (err) {

        console.log(err);
        if (err.response && err.response.data) {
            resolved.error = err.response.data
        } else {
            resolved.error = {
                message:"SomeThing went Wrong"
            }
        }

    }

    return resolved;
}

const EditPlaceAPI = async (id, data) => {
    let resolved = {
        data: null,
        error: null
    }

    let formData = new FormData()

    let process = Object.keys(data).map((key) => {
        if (data[key].public_id) {
            // formData.append(`${key}`, null)
        } else if (data[key].file) {
            formData.append(`${key}`, data[key].file)
        } else {
            formData.append(`${key}`, data[key])
        }
    })
    await Promise.all(process)


    try {
        const res = await axios({
            url: `place/?id=${id}`,
            method: "PUT",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            data: formData
            // withCredentials: true

        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data
        } else {
            resolved.error.message = "SomeThing went Wrong"
        }

    }

    return resolved;
}

const deletePlaceAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: `place/?id=${id}`,
            method: "delete",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            // withCredentials: true

        })
        resolved.data = res.data
    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data
        } else {
            resolved.error.message = "SomeThing went Wrong"
        }

    }

    return resolved;
}
export { getPlaceAPI, AddPlaceAPI , EditPlaceAPI , deletePlaceAPI }