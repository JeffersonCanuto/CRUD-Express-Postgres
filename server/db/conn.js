const { Sequelize } = require("sequelize");
const createUserModel = require("../model/userModel");

const sequelize = new Sequelize("postgres", "postgres", "1234", {
    host: "localhost",
    port: "5433",
    dialect: "postgres"
});

let UserModel;

const conn = async() => {
    try {
        await sequelize.authenticate();
        console.log("The connection has been successfully established!");

        // Create Models after connection is established
        UserModel = await createUserModel(sequelize);
        await sequelize.sync();

        console.log("Database has been synced!");
    } catch(error) {
        console.log(`Unable to connect to the database. Error: ${error}`);
    }
};

const UserModelData = (async () => {
    await conn();

    return UserModel;
})();

module.exports = { conn, UserModelData };