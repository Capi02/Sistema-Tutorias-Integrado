const { authenticateToken } = require("../middlewares/validateToken")
const {authenticateRole} = require("../middlewares/verifyRole");
 

const Router = require("express");
const router = Router();

router.get("/", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Admin",
        username
    }

    res.render("admin/inicio", locals)
})

router.get("/estudiantes", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Estudiantes",
        username
    }

    res.render("admin/estudiantes", locals)
})

router.get("/maestros", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Maestros",
        username,
        role,
    }

    res.render("admin/maestros", locals)
})

router.get("/psicologos", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Psicólogos",
        username
    }

    res.render("admin/psicologos", locals)
})

router.get("/agregar", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Agregar",
        username
    }

    res.render("admin/agregarUsuarios", locals)
})

router.get("/grupos", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Grupos",
        username
    }

    res.render("admin/grupos", locals)
})

router.get("/pat", authenticateToken, authenticateRole("admin"), (req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "PAT ",
        username
    }

    res.render("admin/pat", locals)
})

router.get("/citas-admin", authenticateToken, ( req, res) => {
    const {username, role} = req.user;

    const locals = {
        title: "Admin Citas",
        username, 
        role,
    }

    res.render("admin/citas-admin", locals)
})

module.exports = router;