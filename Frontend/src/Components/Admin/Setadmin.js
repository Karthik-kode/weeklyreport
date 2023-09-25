import React, { useState } from "react";


export default function Setadmin() {
    const status = ['Completed', 'On-progress', 'On-hold'];
    const [form, setForm] = useState([
        { activity: '', status: status[0] }
    ])

    const handlechange = (e, index) => {
        let data = [...form];
        data[index][e.target.name] = e.target.value;
        setForm(data)
        console.log(index, e.target.value)
    }
    const submit = () => {
        console.log("form results")
        console.log(form)
    }
    const addactivity = () => {
        console.log("inside actiivty")
        let obj = {
            activity: '',
            status: status[0]
        }
        console.log("obj",obj);
        console.log("formvalues",form);
        setForm([...form, obj])
    }
    const removeactivity = (index) =>{
        let obj = [...form]
        obj.splice(index , 1)
        setForm(obj)
    }
    return (
        <>

            <div>
                <form onSubmit={submit}>
                    {form.map((value, index) => {
                        return (
                            <div key={index}>
                                <input
                                    type="text"
                                    name="activity"
                                    placeholder="activity"
                                    onChange={e => handlechange(e, index)}
                                    value={value.activity} />
                                <select
                                    name="status"
                                    defaultValue={value.status}
                                    onChange={e => handlechange(e, index)}
                                >
                                    {status.map((e, index) => {
                                        return (
                                            <option key={index}>{e}</option>
                                        )
                                    })}

                                </select>
                                <button onClick={() => removeactivity(index)}>Remove Activity</button>

                            </div>

                        )
                    })}

                </form>
                <button onClick={addactivity}>Add Activity</button>
                <button onClick={submit}>submit</button>
                

            </div>
        </>
    )
}