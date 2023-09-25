import React from "react";


export default function Projectmembers(props) {
    console.log(props.Data)
    const projectmembers = props.Data;
    console.log('pm', typeof (projectmembers));
    return (
        <>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Projectmembers</th>
                            <th scope="col">Role</th>

                        </tr>
                    </thead>
                    <tbody>

                        {/* {projectmembers.map((e) => {
                            return (
                                <>
                                    <tr>


                                        <td>
                                            {e.employeeName}
                                        </td>
                                        <td>
                                            {e.Role}
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        } */}
                        {
                            Object.entries(projectmembers).map(([key, value]) => {
                                return (
                                    <>

                                        <tr>
                                            <td key={key}>{value.employeeName}</td>
                                            <td key={key}>{value.Role}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>

        </>
    )
}