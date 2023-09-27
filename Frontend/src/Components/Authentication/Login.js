import React, { useState } from "react"
import { useNavigate } from "react-router"
import Cookies from "universal-cookie";
import '../../Styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

export default function Login() {
    const Cookie = new Cookies();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ValidPassword, setValidPassword] = useState(false)
    const navigate = useNavigate();
    const checkPassword = (password) => {
        // Define your password constraints
        console.log("inside checkpassword")
        console.log("value", ValidPassword)
        const regexPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[0-9]).{8,}$/;
        const isValid = regexPattern.test(password);

        setValidPassword(isValid);
    };
    const handlelogin = (e) => {
        e.preventDefault()
        checkPassword(password);
        

            console.log("insdie handlelogin")
            axios.post("http://localhost:3001/authenticate/login", { username })
                .then((response) => {
                    console.log("response", response)
                    // console.log("response: ", response.data.user.Role)
                    const user = response.data
                    console.log(user)
                    // debugger;
                    if (user === 'user not found') {
                        toast.error("User not found!")

                    }
                    else if (!ValidPassword) {
                        toast.error("Invalid Password1")
                    }
                    else {

                        // const cred = response.data
                        console.log("user", user.data[0].Role)
                        const employeedata = user.data[0]
                        const Role = employeedata.Role
                        // const employeeProjects = user.data[1]
                        // const otherProjects = user.data[2]
                        console.log(Role)
                        const employee = employeedata.employeeName
                        // const loggedprojects = employeeProjects
                        // const otherprojects = otherProjects
                        Cookie.set("employeeName", employee)
                        Cookie.set("role", Role)
                        Cookie.set("loggedprojects", user.data[1])
                        Cookie.set("otherprojects", user.data[2])
                        navigate('/projects')
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
                    {/* <form className="register-form">

                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form> */}
                    <form className="login-form" onSubmit={handlelogin}>
                        <input type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />

                        <input
                            type="password"
                            placeholder="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button type="submit" className="form-button">login</button>

                    </form>
                </div>
            </div>
        </>
    )
}


