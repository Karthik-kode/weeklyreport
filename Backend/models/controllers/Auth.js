const db = require('../entities')
const employee = db.Employee
const projects = db.Projects

//Role based authentication
const auth = async (req, res) => {
    const name = req.body.username
    console.log("name", name)
    const employeeProjects = [];
    const otherProjects = [];
    try {
        const user = await employee.findOne({
            where: {
                employeeName: name,


            },
        })
        console.log("after", user)
        // if (user == null) {
        //     console.log("ibnside cond")
        //     return res.status(404).json({ message: 'user not found' });
        // }
        console.log(user, "asfg")
        console.log("data", user)


        if (user) {
            const projectsdata = await projects.findAll();
            projectsdata.forEach(projects => {
                if (projects.projectName == user.Project_allocated) {
                    employeeProjects.push(projects.toJSON());
                } else {
                    otherProjects.push(projects.toJSON());
                }
            });
            const projectname = user.Project_allocated;
            console.log("pname", projectname)
            console.log("Json", user.toJSON())
            // res.json(user.toJSON());
            // res.json({
            //     user: user.toJSON(),
            //     employeeProjects: employeeProjects,
            //     otherProjects: otherProjects,
            // });
            res.send({data:[user.toJSON(),employeeProjects,otherProjects]})

        }
        else {
            console.log("NULL DATA")
            // res.send("NULL user")
            return res.send('user not found');
        }


    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    auth
}