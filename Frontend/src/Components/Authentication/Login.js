import React, { useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie";
import '../../Styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

export default function Login() {
    const Cookie = new Cookies();
    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    const handlelogin = (e) => {
        e.preventDefault()
        console.log("insdie handlelogin")
        axios.post("http://localhost:3001/authenticate/login", { username })
            .then((response) => {
                console.log("response")
                console.log("response: ", response.data)
                const user = response.data
                // debugger;
                if (user === 'user not found') {
                    toast.error("User not found!")

                }
                else {
                    const Role = user.Role
                    Cookie.set("role" , Role)
                    navigate('/projects', { state: { Role } })
                }



            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <>
            <div className="login-page">
                <div className="form">
                    <ToastContainer />
                    <form className="register-form">

                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form" onSubmit={handlelogin}>
                        <input type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />

                        <input type="password" placeholder="password" />
                        <button type="submit" >login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}


