//Defining Employee Table
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        EmployeeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        employeeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Project_allocated: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Role: {
            type: DataTypes.STRING,
            allowNull: false,

        },


    },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );

    return Employee;
};
