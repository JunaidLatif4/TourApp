import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FaLock } from "react-icons/fa"

import { ToastContainer, toast } from 'react-toastify';
import { loginAPI } from '../../../API/Auth'

import "./Login.scss"

const Login = () => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        email: "",
        password: ""
    })

    const enteringData = (event) => {
        let { value, name } = event.target

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const login = async () => {
        let res = await loginAPI(enteredData)
        console.log(res);
        if (res.error != null) {
            toast.error(res.error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            setEnteredData({
                email: "",
                password: ""
            })
        } else {
            localStorage.setItem("adminData", res.data.data)
            setEnteredData({
                email: "",
                password: ""
            })
            toast.success("Login Success", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            setTimeout(() => {
                history.push("/dashboard/country")
            }, 3000);
        }
    }

    return (
        <>
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="dashboardlogin_container">
                <div className="form_box">
                    <div className="title">
                        <FaLock />
                    </div>
                    <div className="form">
                        <div className="input_box">
                            <input type="text" name='email' onChange={enteringData} value={enteredData.email} placeholder='UserName' />
                        </div>
                        <div className="input_box">
                            <input type="password" name='password' onChange={enteringData} value={enteredData.password} placeholder='Password' />
                        </div>
                        <div className="btn">
                            <button onClick={login}> log In </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login