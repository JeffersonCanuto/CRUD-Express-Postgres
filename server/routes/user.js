const { Router } = require("express");
const { 
    getAllUsers, 
    addNewUser,
    updateUser,
    deleteUser
} = require("../controller/userController");

const router = Router();

router.get("/getAllUsers", getAllUsers);
router.post("/addNewUser", addNewUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;