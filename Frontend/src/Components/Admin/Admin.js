import React, { useState } from 'react';
import '../../Styles/Admin.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

export default function Admin() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    page1: {
      projectID: '',
      projectName: '',
      startDate: '',
      endDate: '',
      projectStatus: 'On-Progress',
    },
    page2: {
      activitiesPlannedThisWeek: '',
      activitiesPlannedNextWeek: '',
    },
    page3: {
      issueRisk: '',
      impact: '',
      mitigations: '',
    },
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
    setCurrentPage(1); 
    navigate('/projects')
    // Reset to the first page when closing the form
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [`page${currentPage}`]: {
        ...formData[`page${currentPage}`],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setIsFormVisible(false);
    // setCurrentPage(1);

    axios.post('http://localhost:3001/reports/create', formData)
      .then((response) => {
       
        console.log('Form submitted successfully');
        console.log(response);
       
        setIsFormVisible(false);
        setCurrentPage(1);
      })
      .catch((error) => {
        // Handle errors (e.g., display an error message)
        console.error('Error submitting form:', error);
      });
      navigate('/projects')
  };

  return (
    <div className="App">
      {/* <button onClick={showForm}>create Report</button> */}

      {isFormVisible && (
        <div className="form-container">
          <div className="form-modal">


            
            <form onSubmit={handleSubmit}>
            <h2>Page {currentPage}</h2>

            
              <button
                className="btn btn-danger close-button"
                onClick={hideForm}>
                &times;
              </button>
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
                  <textarea
                    name="activitiesPlannedThisWeek"
                    value={formData.page2.activitiesPlannedThisWeek}
                    onChange={handleChange}
                  />
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


