import axios from "../axiosInstance"

const getPathAPI = async (id = null, country = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: id != null ? `path/?id=${id}` : country != null ? `path/?country=${country}` : `/path`,
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

const AddPathAPI = async (data) => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        const res = await axios({
            url: `path/`,
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

const EditPathAPI = async (id, data) => {
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
            url: `path/?id=${id}`,
            method: "PUT",
            headers: {
                // Authorization: logedIn == "true" ? `Bearer ${token}` : null
            },
            data: data
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

const deletePathAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: `path/?id=${id}`,
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

export { getPathAPI, AddPathAPI, EditPathAPI, deletePathAPI }