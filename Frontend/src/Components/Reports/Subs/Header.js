import React from "react";
import '../../../Styles/Header.css'
import moment from 'moment'

export default function Header(props) {
    const Data = props.Data
    const Members = props.Members
    console.log("header",Data)
    console.log("members",Members)
    console.log(Data,Members)
    console.log("headerdata",Data.startDate)
    console.log(typeof(Data.startDate))
    const startDate = new Date(Data.startDate)
    const endDate = new Date(Data.endDate)

    // const sD = startDate.split('T')[0];
    // const eD = endDate.split('T')[0];
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-div1">
                        <span>{Data.projectName}
                        </span>
                        <span>
                            {moment(startDate).format('D/MM/YYYY')} -
                            {moment(endDate).format('D/MM/YYYY')}
                        </span>
                    </div>
                    <div className="card-div2">
                        <h6>Project Lead</h6>
                        <h5>{Data.projectStatus}</h5>
                    </div>

                </div>
            </div>
        </>
    )
}