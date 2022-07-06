import axios from "../axiosInstance"

const getBlogsAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: id == null ? `blog/` : `blog/?id=${id}`,
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

const AddBlogAPI = async (data) => {
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
            url: `blog/`,
            method: "POST",
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

const EditBlogAPI = async (id, data) => {
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
            url: `blog/?id=${id}`,
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

const deleteBlogsAPI = async (id = null) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: `blog/?id=${id}`,
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

export { getBlogsAPI, AddBlogAPI, EditBlogAPI, deleteBlogsAPI }