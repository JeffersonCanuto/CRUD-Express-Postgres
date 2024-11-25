const { Router } = require("express");
const { 
    getAllUsers, 
    addNewUser 
} = require("../controller/userController");

const router = Router();

router.get("/getAllUsers", getAllUsers);
router.post("/addNewUser", addNewUser);

module.exports = router;