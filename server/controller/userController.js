class User {
    getAllEmp(req, res) {
        res.status(200).send("Helloooww jefsu!");
    }
}

module.exports = new User();