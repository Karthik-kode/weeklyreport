//Defining Report Table

module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('Report', {
      projectID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      projectStatus: {
        type: DataTypes.ENUM('Completed', 'On-Progress', 'On-Hold'),
        allowNull: false,
      },
      activitiesPlannedThisWeek: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activitiesPlannedNextWeek: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issueRisk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      impact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mitigations: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Report;
  };
  