const db = require('../entities')
const projectsdata = db.Projects;

const fetchprojects = async(req, res) => {
    try{

        const projects = await projectsdata.findAll();
        // console.log("projects: ", projects);
        res.json({projectdata:projects});
        
    }
    catch{
        console.log("error!")
    }
}


module.exports = {
    fetchprojects
}