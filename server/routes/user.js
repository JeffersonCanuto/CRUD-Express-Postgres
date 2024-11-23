const { Router } = require("express");
const { read } = require("../controller/userController");

const router = Router();

router.get("/getAllEmp", read);

module.exports = router;