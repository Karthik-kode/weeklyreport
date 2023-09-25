import React from "react";
import '../../../Styles/Risks.css'


export default function Keyrisks(props) {
    const data = props.Data
    return (
        <>
            <div className="risks">
                <div>
                    <h1>Key Risks</h1>
                </div>
                <div>


                    <table className="table">
                        <tr>
                            <th>Issues/Risks</th>
                            <th>Impact</th>
                            <th>Mitigations</th>
                        </tr>
                        <tr>
                            <td>{data.issueRisk}</td>
                            <td>{data.impact}</td>
                            <td>{data.mitigations}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}