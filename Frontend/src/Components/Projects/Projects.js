import React, { useEffect, useState } from "react";
import '../../Styles/Projects.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Admin from "../Admin/Admin";


export default function Projects() {
    const navigate = useNavigate();
    const [role, setRole] = useState(false);
    const [data, setdata] = useState([])
    const project_name = 'enhesa';
    const { state } = useLocation();
    const Role = state && state.Role;
    console.log(Role)
const cookie=new Cookies();
    const memberrole=cookie.get("role")


    const checkRole = (memberrole) => {
        if (memberrole === 'Lead') {
            setRole(true)
        }
    }
    const handlenavigate = (name) => {
        navigate('/reports', { state: { name } })
        // console.log(name)
    }
    const fetch = () => {
        console.log("inside fetch!")
        axios.get("http://localhost:3001/projects/")
            .then((response) => {
                console.log(response.data.projectdata)
                console.log("data", typeof (response.data));
                setdata(response.data.projectdata)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const createReport = () =>{
        navigate('/admin')
    }
    useEffect(() => {
        fetch();
        checkRole(memberrole);
    }, [])
    return (
        <>
            {data.map((e) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h3>{e.projectNumber}</h3>
                                    <h5 className="card-title">{e.projectName}</h5>
                                    <h6>{e.projectStatus}</h6>
                                </div>
                                <div className="events">
                                    {role && (
                                        <div>
                                            <button onClick={createReport}>Create Report</button>
                                        </div>
                                    )}

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