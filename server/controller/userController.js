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
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
    /* CREATE */
    async addNewUser(req, res) {
        const { userId } = req.body;
        try {
            const user = await((await UserModelData).findOne({ where: { userId: userId }}));

            if (!user) {
                (await UserModelData).create(req.body);
                return res.status(201).json({ message: "User created successfully..." })
            }

            return res.status(200).json({ message: "User already exists in DB..."})
        } catch(error) {
            console.log(`Error while adding a new user. Error: ${error}`);
            return res.status(500).json({ message: "Internal Server Error"});
        }
    }
    /* UPDATE */
    async updateUser(req, res) {
        const { id } = req.params;
        
        try {
            const user = await((await UserModelData).update(req.body, { where: { userId: id }}));

            if (user.shift() === 0) {
                return res.status(404).json({ message: `User with id ${id} cannot be found on the DB...`});
            }

            return res.status(200).json({ message: `User with id ${id} updated successfully...` });
        } catch(error) {
            console.log(`Error while updating user. Error: ${error}`);
            return res.status(500).json({ message: "Internal Server Error"});
        }
    }
    /* DELETE */
    async deleteUser(req, res) {
        const { id } = req.params;
        
        try {
            const user = await((await UserModelData).findOne({ where: { userId: id }}));

            if (!user) {
                return res.status(404).json({ message: `User with id ${id} cannot be found on the DB...`})
            }

            user.destroy();
            return res.status(200).json({ message: `User with id ${id} deleted successfully...` });
        } catch(error) {
            console.log(`Error while deleting user. Error: ${error}`);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}



module.exports = new User();