import React, { useEffect, useState } from "react";
import '../../Styles/Projects.css';
import Cookies from "universal-cookie";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Admin from "../Admin/Admin";


export default function Projects() {
    const navigate = useNavigate();
    const [role, setRole] = useState(false);
    const [data, setdata] = useState([])
    const { state } = useLocation();
    const [modalVisible, setModalVisible] = useState(false);

    // const Role = state && state.Role;
    // console.log(Role)
    const Data = state && state.cred





    const cookie = new Cookies();
    const memberrole = cookie.get("role")
    const loggedprojects = cookie.get("loggedprojects")
    const otherprojects = cookie.get("otherprojects")
    const employeeName = cookie.get("employeeName")
    // cookie.set("loggedprojects", loggedprojects)
    // cookie.set("otherprojects", otherprojects)

    const checkRole = (memberrole) => {
        if (memberrole === 'Lead') {
            setRole(true)
        }
    }
    const handlenavigate = (name) => {
        navigate('/reports', { state: { name } })
        // console.log(name)
    }

    //fetching projects (General)
    // const fetch = () => {
    //     console.log("inside fetch!")
    //     axios.get("http://localhost:3001/projects/")
    //         .then((response) => {
    //             console.log(response.data.projectdata)
    //             console.log("data", typeof (response.data));
    //             setdata(response.data.projectdata)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }


    const createReport = () => {
        navigate('/admin')
    }
    const logout = () => {
        navigate('/')
    }
    const statuscheck = (status) =>{
        console.log(status)
        switch(status){
            case "On-Progress":
                return "badge badge-warning"
            case "Completed":
                return "badge badge-success"
            case "On-hold":
                return "badge badge-info"
            default:
                return "badge badge-danger"
        }
        
    }

    useEffect(() => {
        // fetch();
        checkRole(memberrole);
    }, [])
    return (
        <>
            <div className="header">
                <h2 className="heading" >Your Projects</h2>
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {employeeName}
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Profile</a>
                        <button onClick={logout}>
                            {/* <a className="dropdown-item" href="#">Logout</a> */}
                            Logout
                        </button>
                    </div>
                </div>
                {/* <div className="card profile">
                    <div className="card-header profile1" onClick={tooltip}>
                        Logged User : {employeeName}
                    </div>
                    {modalVisible && (
                        <div className="modal">
                            <button className="modal-button">Profile</button>
                            <button className="modal-button">Logout</button>
                        </div>
                    )}
                </div> */}
            </div>

            {
                loggedprojects.map((e) => {
                    const status = statuscheck(e.projectStatus)
                    console.log("status", status)
                    return (
                        <>
                            <div className="card">
                                <div className="card-body">
                                    <div className="vitals">
                                        <div><h4>{e.projectNumber}</h4>
                                            <h5 className="card-title">{e.projectName}</h5>
                                        </div>

                                        <div className={status}><h6>{e.projectStatus}</h6></div>
                                    </div>
                                    <div className="events">
                                        <div className="role">
                                            {role && (
                                                
                                                    <button onClick={createReport}>Create Report</button>
                                                
                                            )}
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handlenavigate(e.projectName)}
                                            >
                                                Weekly report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <h2>JMAN Projects</h2>
            {otherprojects.map((e) => {
                const status = statuscheck(e.projectStatus)
                return (
                    <>
                        <div className="card">
                            <div className="card-body">
                            <div className="vitals">
                                        <div><h4>{e.projectNumber}</h4>
                                            <h5 className="card-title">{e.projectName}</h5>
                                        </div>

                                        <div className={status}><h6>{e.projectStatus}</h6></div>
                                    </div>
                                <div className="events">
                                    {/* {role && (
                                        <div>
                                            <button onClick={createReport}>Create Report</button>
                                        </div>
                                    )} */}

                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handlenavigate(e.projectName)}
                                        >
                                            Weekly report
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>

                )

            })}




        </>
    )
}