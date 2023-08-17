const { authenticateToken } = require("../middlewares/validateToken")
const { authenticateRole } = require("../middlewares/verifyRole");
const Student = require("../models/Student.model")


const Router = require("express");
const router = Router();

router.get("/", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Admin",
        username
    }

    res.render("admin/inicio", locals)
})

router.get("/estudiantes", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Estudiantes",
        username
    }

    res.render("admin/estudiantes", locals)
})

router.get("/student/:id", authenticateToken, authenticateRole("admin"), async (req, res) => {
    try {
        const { username, role } = req.user;
        const { id } = req.params;

        const studentInformation = await Student.findById({ _id: id })

        if (studentInformation) {
            const locals = {
                title: "Estudiantes",
                username,
                student: studentInformation
            }

            res.render("admin/detallesAlumno", locals)
        } else {
            return res.status(404).json({ error: "Estudiante no encontrado" })
        }
    } catch (err) {
        console.error('Error al obtener los detalles del estudiante:', err);
        throw err;
    }


})

router.get("/maestros", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Maestros",
        username,
        role,
    }

    res.render("admin/maestros", locals)
})

router.get("/psicologos", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Psicólogos",
        username
    }

    res.render("admin/psicologos", locals)
})

router.get("/agregar", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Agregar",
        username
    }

    res.render("admin/agregarUsuarios", locals)
})

router.get("/grupos", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "Grupos",
        username
    }

    res.render("admin/grupos", locals)
})

router.get("/pat", authenticateToken, authenticateRole("admin"), (req, res) => {
    const { username, role } = req.user;

    const locals = {
        title: "PAT ",
        username
    }

    res.render("admin/pat", locals)
})


module.exports = router;