import React, { useState } from 'react';

export default function Admins() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    page1: {
      projectID: '',
      projectName: '',
      startDate: '',
      endDate: '',
      projectStatus: 'Completed',
    },
    page2: {
      activitiesPlannedThisWeek: [''], // Initialize with one empty activity
      activitiesPlannedNextWeek: '',
    },
    page3: {
      issueRisk: '',
      impact: '',
      mitigations: '',
    },
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
    setCurrentPage(1); // Reset to the first page when closing the form
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [`page${currentPage}`]: {
        ...prevData[`page${currentPage}`],
        [name]: value,
      },
    }));
  };

  const handleActivitiesThisWeekChange = (index, value) => {
    setFormData((prevData) => {
      const updatedActivities = [...prevData.page2.activitiesPlannedThisWeek];
      updatedActivities[index] = value;
      return {
        ...prevData,
        page2: {
          ...prevData.page2,
          activitiesPlannedThisWeek: updatedActivities,
        },
      };
    });
  };

  const renderActivitiesThisWeek = () => {
    const { activitiesPlannedThisWeek } = formData.page2;

    return (
      <div>
        {activitiesPlannedThisWeek.map((activity, index) => (
          <div key={index}>
            <input
              type="text"
              value={activity}
              onChange={(e) => handleActivitiesThisWeekChange(index, e.target.value)}
              placeholder={`Activity ${index + 1}`}
            />
          </div>
        ))}
        <button type="button" onClick={addNewActivityThisWeek}>
          Add Activity
        </button>
      </div>
    );
  };

  const addNewActivityThisWeek = () => {
    setFormData((prevData) => ({
      ...prevData,
      page2: {
        ...prevData.page2,
        activitiesPlannedThisWeek: [...prevData.page2.activitiesPlannedThisWeek, ''],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send the formData to your backend for further processing
  };

  return (
    <div className="App">
      <h1>Multi-Page Form</h1>
      <button onClick={showForm}>Show Form</button>

      {isFormVisible && (
        <div className="form-container">
          <div className="form-modal">
            <button className="close-button" onClick={hideForm}>
              &times;
            </button>
            <h2>Page {currentPage}</h2>
            <form onSubmit={handleSubmit}>
              {currentPage === 1 && (
                <div>
                  {/* Page 1 fields */}
                  <label>Project ID:</label>
                  <input
                    type="text"
                    name="projectID"
                    value={formData.page1.projectID}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Project Name:</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.page1.projectName}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.page1.startDate}
                    onChange={handleChange}
                  />
                  <br />
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.page1.endDate}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Project Status:</label>
                  <select
                    name="projectStatus"
                    value={formData.page1.projectStatus}
                    onChange={handleChange}
                  >
                    <option value="Completed">Completed</option>
                    <option value="On-Progress">On-Progress</option>
                    <option value="On-Hold">On-Hold</option>
                  </select>
                </div>
              )}

              {currentPage === 2 && (
                <div>
                  {/* Page 2 fields */}
                  <label>Activities Planned This Week:</label>
                  {renderActivitiesThisWeek()}
                  <br />
                  <label>Activities Planned Next Week:</label>
                  <textarea
                    name="activitiesPlannedNextWeek"
                    value={formData.page2.activitiesPlannedNextWeek}
                    onChange={handleChange}
                  />
                </div>
              )}

              {currentPage === 3 && (
                <div>
                  {/* Page 3 fields */}
                  <label>Issue/Risk:</label>
                  <textarea
                    name="issueRisk"
                    value={formData.page3.issueRisk}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Impact:</label>
                  <textarea
                    name="impact"
                    value={formData.page3.impact}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Mitigations:</label>
                  <textarea
                    name="mitigations"
                    value={formData.page3.mitigations}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div>
                {currentPage > 1 && (
                  <button type="button" onClick={prevPage}>
                    Previous
                  </button>
                )}
                {currentPage < 3 && (
                  <button type="button" onClick={nextPage}>
                    Next
                  </button>
                )}
                {currentPage === 3 && (
                  <button type="submit">Submit</button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
