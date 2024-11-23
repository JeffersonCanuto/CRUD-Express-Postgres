const { DataTypes } = require("sequelize");

const createUserModel  = async(sequelize) => {
    /* Sequelize, by default, creates tables with their names as plural. 
    Hence, the table below is gonna be named as "users", instead of "user"
    */

    const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase: true,
            unique: true
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return User;
}

module.exports = createUserModel;