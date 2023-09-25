//Defining Report Table

module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define('Projects', {
      projectID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
      },
      projectNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectStatus: {
        type: DataTypes.ENUM('Completed', 'On-Progress', 'On-Hold'),
        allowNull: false,
      },
    }
    ,
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        });
  
    return Projects;
  };
  