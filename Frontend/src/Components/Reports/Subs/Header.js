import React from "react";
import '../../../Styles/Header.css'
import moment from 'moment'


export default function Header(props) {
    const Data = props.Data
    

    console.log("headerdata",Data.startDate)
    console.log(typeof(Data.startDate))
    const startDate = new Date(Data.startDate)
    const endDate = new Date(Data.endDate)

    // const lead = Members.map((e) => {
    //     if(e.Role == "Lead"){return e.employeeName}
    // })

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
                        <h6>Rads</h6>
                        <h5>{Data.projectStatus}</h5>
                    </div>

                </div>
            </div>
        </>
    )
}