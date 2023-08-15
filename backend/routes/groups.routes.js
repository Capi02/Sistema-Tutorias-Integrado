const Router = require("express");
const { createGroup, showGroups, deleteGroup} = require("../controllers/group.controller");

const router = Router();

router.post("/create", createGroup);
router.get("/groups", showGroups);
router.delete("/group/:id", deleteGroup);


module.exports = router;
