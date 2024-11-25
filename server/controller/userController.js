const { UserModelData } = require("../db/conn");

class User {
    /* READ */
    async getAllUsers(_, res) {
        try {
            const users = await((await UserModelData).findAll());

            if (!users.length) {
                return res.status(204).end();
            }

            return res.status(200).json(users);
        } catch (error) {
            console.log(`Error while fetching all users: ${error}`);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    /* CREATE */
    async addNewUser(req, res) {
        const { userId } = req.body;
        try {
            const users = await((await UserModelData).findOne({ where: { userId: userId }}));

            if (users === null) {
                (await UserModelData).create(req.body);
                return res.status(201).json({ message: "User created successfully..." })
            }

            return res.status(200).json({ message: "User already exists in DB..."})
        } catch(error) {
            console.log(`Error while adding a new user. Error: ${error}`);
            return res.status(500).json({ error: "Internal Server Error"});
        }
    }
}



module.exports = new User();