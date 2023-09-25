import React, { useEffect, useState, useRef } from "react";
import '../../Styles/Reports.css'
import Header from "./Subs/Header";
import Activities_cur from "./Subs/Activities_cur";
import Activities_past from "./Subs/Activities_past";
import Keyrisks from "./Subs/Keyrisks";
import Projectmembers from "./Subs/Projectmembers";
import html2canvas from 'html2canvas';
import { useLocation } from "react-router-dom";
import axios from "axios";


export default function Reports() {
    const { state } = useLocation();
    const dashboardRef = useRef(null);
    const name = state && state.name;
    console.log("report name", name);
    const [data, setData] = useState({})
    const [members, setMembers] = useState({})
    const captureScreenshot = () => {
        if (dashboardRef.current) {
            html2canvas(dashboardRef.current).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imgData;
                link.download = 'dashboard.png';
                link.click();
            });
        }
    };

    //    const projectData = data.projectDetails;
    //    const projectMembers = data.projectMembers;

    useEffect(() => {
        axios.get(`http://localhost:3001/reports/${name}`)
            .then((response) => {
                console.log("data", response.data);
                console.log("PD", response.data.projectDetails);
                console.log("PM", response.data.projectMembers);

                setData(response.data.projectDetails);
                setMembers(response.data.projectMembers);
                // console.log(data.activitiesPlannedNextWeek);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [name])

    return (
        <>
            <div className="contains" ref={dashboardRef} id="dashboard">
                <div className="header">
                    <Header Data={data} />
                </div>


                <div className="grid">
                    <Activities_cur Data={data} />
                    <Activities_past Data={data} />
                </div>
                <div className="grid1">
                    <Keyrisks Data={data} />
                    <Projectmembers Data={members} />
                </div>
                <div>
                    <button id="downloadButton" className="button" onclick={() => captureScreenshot()}>Get Report</button>
                </div>


                {/* <Projectmembers Data={members}/> */}

            </div>

        </>
    )
}