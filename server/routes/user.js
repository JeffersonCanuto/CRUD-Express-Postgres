const { Router } = require("express");
const { getAllEmp } = require("../controller/userController");

const router = Router();

router.get("/getAllEmp", getAllEmp);

module.exports = router;