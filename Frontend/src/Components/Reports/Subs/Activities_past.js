import React, { useEffect } from "react";
import '../../../Styles/Activities_cur.css'


export default function Activities_past(props) {

    // const Data = Object.entries(props.Data.Activities_planned)
    const Data = props.Data
    console.log(Data)

    function colors(status) {
        switch (status) {
          case 'Completed':
            return 'completed-button';
          case 'On-progress':
            return 'progress-button';
          case 'On-hold':
            return 'hold-button';
          default:
            return 'default-button';
        }
      }

      useEffect(() =>{
            colors()
      }, [])
    return (
        <>
            <div className="card card1">
                <div className="card-body card-body1">
                    <h4>Activities Planned for next week</h4>
                    {/* <ul>
                        {Data.map((e , index) => {
                            return (
                                <div className="list">
                                    <li key={index}>
                                        {e[0]}
                                    </li>
                                    
                                    <span className={colors(e[1])}>
                                        {e[1]}
                                    </span>
                                </div>

                            )
                        })}
                    </ul> */}
                    <h2>{Data.activitiesPlannedNextWeek}</h2>
                </div>
            </div>


        </>
    )
}