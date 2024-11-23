const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "1234", {
    host: "localhost",
    port: "5433",
    dialect: "postgres"
});

const conn = async() => {
    try {
        await sequelize.authenticate();
        console.log("The connection has been successfully established!");
    } catch(error) {
        console.log(`Unable to connect to the database: ${error}`);
    }
};

module.exports = conn;