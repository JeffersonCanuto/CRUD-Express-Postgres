const { UserModelData } = require("../db/conn");

class User {
    async getAllEmp(req, res) {
        try {
            const users = (await UserModelData).findAll();

            if (!users.length) {
                return res.status(204).end();
            }

            return res.status(200).json(users);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({ "error": "Internal Server Error!" });
        }
    }
}

module.exports = new User();