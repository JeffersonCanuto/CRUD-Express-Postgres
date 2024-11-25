const { Router } = require("express");
const { 
    getAllUsers, 
    addNewUser,
    updateUser
} = require("../controller/userController");

const router = Router();

router.get("/getAllUsers", getAllUsers);
router.post("/addNewUser", addNewUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;