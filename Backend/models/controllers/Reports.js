const db = require('../entities')
const reports = db.Report
const employee = db.Employee

//Admin - creating reports
const createReport = async (req ,  res)  => {
    console.log("coming to backend",req.body)
    const formData = req.body
    try {

        const report = await reports.create({

            projectID: formData.page1.projectID,
            projectName: formData.page1.projectName,
            startDate: formData.page1.startDate,
            endDate: formData.page1.endDate,
            projectStatus: formData.page1.projectStatus,
            activitiesPlannedThisWeek: formData.page2.activitiesPlannedThisWeek,
            activitiesPlannedNextWeek: formData.page2.activitiesPlannedNextWeek,
            issueRisk: formData.page3.issueRisk,
            impact: formData.page3.impact,
            mitigations: formData.page3.mitigations,

          });
        // Send a response indicating success
        console.log('Report created:', report.toJSON());
        res.status(201).json({ message: 'report added successfully' });

    } catch (err) {
        // Handle any errors that occur during the addition process
        console.error(err);
        res.status(500).json({ error: 'Failed to create report' });
    }
}

//Fetching Reports of respective project
const fetchReport = async(req , res) => {
      const name = req.params.name
      console.log("projectname", name)
      try{
        const projectDetails = await reports.findOne({ where: { projectName: name } });
        const projectMembers = await employee.findAll({where : {Project_allocated : name}});
    
        if (!projectDetails) {
             return res.status(404).json({ message: 'Project not found' });
        }
        //Combines JSON data from two tables
        const projectData = {
            "projectDetails" : projectDetails,
            "projectMembers" : projectMembers
        }

        // console.log(projectData)
        res.json(projectData);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch report' });
    }

}

module.exports = {
    createReport,
    fetchReport
}