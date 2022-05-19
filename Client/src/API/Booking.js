import axios from "../axiosInstance"

const getBookingAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: id == null ? `booking/` : `booking/?id=${id}`,
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

const AddBookingAPI = async (data) => {
    let resolved = {
        data: null,
        error: null
    }

    // let formData = new FormData()

    // let process = Object.keys(data).map((key) => {
    //     if (data[key].public_id) {
    //         // formData.append(`${key}`, null)
    //     } else if (data[key].file) {
    //         formData.append(`${key}`, data[key].file)
    //     } else {
    //         formData.append(`${key}`, data[key])
    //     }
    // })
    // await Promise.all(process)


    try {
        const res = await axios({
            url: `booking/`,
            method: "POST",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            data
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

const EditCountryAPI = async (id, data) => {
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
            url: `country/?id=${id}`,
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

const deleteCountriesAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: `country/?id=${id}`,
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

export { getBookingAPI , AddBookingAPI }