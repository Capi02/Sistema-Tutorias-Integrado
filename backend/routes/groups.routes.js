const Router = require("express");
const { createGroup, showGroups, showStudentsByGroup, deleteGroup} = require("../controllers/group.controller");

const router = Router();

router.post("/create", createGroup);
router.get("/groups", showGroups);
router.get("/students/:group", showStudentsByGroup )
router.delete("/delete/:id", deleteGroup);


module.exports = router;
