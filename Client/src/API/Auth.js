import axios from "../axiosInstance"

const loginAPI = async (data) => {
    let resolved = {
        data: null,
        error: null
    }
    try {
        const res = await axios({
            url: `auth`,
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

export { loginAPI }