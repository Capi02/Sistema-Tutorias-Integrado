const { authenticateToken, adminAuth } = require("../middlewares/validateToken")
const Router = require("express");
const router = Router();

const studentSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    aspectosPersonales: {
        email: { type: String, default: "" },
        fechadenacimiento: { type: Date, default: "" },
        carrera: { type: String, default: "" },
        area: { type: String, default: "" },
        grupo: { type: String, default: "" },
        grado: { type: String, default: "" },
        telefono: { type: String, default: "" },
        telefonoemergencia: { type: String, default: "" },
        dequieneseltelefono: { type: String, default: "" },
        telefonoemergencia2: { type: String, default: "" },
        dequieneseltelefono2: { type: String, default: "" },
        sexo: { type: String, default: "" },
    },
    aspectosAcademicos: {
        bachilleratoegresado: { type: String, default: "" },
        otrobachillerato: { type: String, default: "" },
        especialidadbachillerato: { type: String, default: "" },
        promediogeneral: { type: String, default: "" },
        materiasdificultan: { type: String, default: "" },
        tecnicasdeestudio: { type: String, default: "" },
        examenceneval: { type: String, default: "" },
        exameninterno: { type: String, default: "" },
        calificacioninterno: { type: String, default: "" },
    },
    aspectosEconomicos: {
        conquienvives: { type: String, default: "" },
        casadondevives: { type: String, default: "" },
        profesionpapa: { type: String, default: "" },
        profesionmama: { type: String, default: "" },
        cuentasconbeca: { type: String, default: "" },
        tipodebeca: { type: String, default: "" },
        nombrebeca: { type: String, default: "" },
        tieneshermanos: { type: String, default: "" },
        cuantoshermanos: { type: String, default: "" },
        padreomadre: { type: String, default: "" },
        cuantoshijos: { type: String, default: "" },
        trabajas: { type: String, default: "" },
        dondetrabajas: { type: String, default: "" },
        horariolaboral: { type: String, default: "" },
        embarazo: { type: String, default: "" },
    },
    aspectosSalud: {
        enfermadadcronica: { type: String, default: "" },
        queenfermedad: { type: String, default: "" },
        otraenfermedad: { type: String, default: "" },
        tomamedicamento: { type: String, default: "" },
        medicamentoyfrecuencia: { type: String, default: "" },
        tienediscapacidad: { type: String, default: "" },
        tipodiscapacidad: { type: String, default: "" },
        condicionpsicosocial: { type: String, default: "" },
        tipocondicion: { type: String, default: "" },
        bebidasalcoholicas: { type: String, default: "" },
        frecuenciabebidas: { type: String, default: "" },
        fumas: { type: String, default: "" },
        frecuenciafumas: { type: String, default: "" },
    },
    matricula: { type: String, default: "" },
    apellidoPaterno: { type: String, default: "" },
    apellidoMaterno: { type: String, default: "" },
    nombre: { type: String, default: "" },
});
const Student = mongoose.model("Student", studentSchema);

router.get("/personales", authenticateToken, async (req, res) => {

    try {
        if (req.user.username) {

            const student = await Student.findOne({ username: req.user.username });
            if (student) {

                res.render("personales", {
                    heading: "Aspectos Personales",
                    apellidoPaterno: student.apellidoPaterno,
                    apellidoMaterno: student.apellidoMaterno,
                    nombre: student.nombre,
                    matricula: student.matricula,
                    email: student.aspectosPersonales.email,
                    fechadenacimiento: student.aspectosPersonales.fechadenacimiento,
                    carrera: student.aspectosPersonales.carrera,
                    area: student.aspectosPersonales.area,
                    grado: student.aspectosPersonales.grado,
                    grupo: student.aspectosPersonales.grupo,
                    telefono: student.aspectosPersonales.telefono,
                    telefonoemergencia: student.aspectosPersonales.telefonoemergencia,
                    dequieneseltelefono: student.aspectosPersonales.dequieneseltelefono,
                    telefonoemergencia2: student.aspectosPersonales.telefonoemergencia2,
                    dequieneseltelefono2: student.aspectosPersonales.dequieneseltelefono2,
                    sexo: student.aspectosPersonales.sexo,
                    username: student.username
                });
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } else {
            console.log("NO usuario ")
            
        }
    } catch (err) {
        console.error("Error al buscar al usuario:", err);
        res.status(500).send("Error en el servidor");
    }
});

router.get("/academicos", authenticateToken, async (req, res) => {
    try {
        // Verificar si el usuario ha iniciado sesión
        if (req.user.username) {
            // Encontrar al usuario en la base de datos por el nombre de usuario
            const student = await Student.findOne({ username: req.user.username });
            if (student) {

                res.render("academicos", {
                    heading: "Aspectos Academicos",
                    bachilleratoegresado: student.aspectosAcademicos.bachilleratoegresado,
                    otrobachillerato: student.aspectosAcademicos.otrobachillerato,
                    especialidadbachillerato: student.aspectosAcademicos.especialidadbachillerato,
                    promediogeneral: student.aspectosAcademicos.promediogeneral,
                    materiasdificultan: student.aspectosAcademicos.materiasdificultan,
                    tecnicasdeestudio: student.aspectosAcademicos.tecnicasdeestudio,
                    examenceneval: student.aspectosAcademicos.examenceneval,
                    exameninterno: student.aspectosAcademicos.exameninterno,
                    calificacioninterno: student.aspectosAcademicos.calificacioninterno,
                    username: student.username
                });
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } else {
            res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
        }
    } catch (err) {
        console.error("Error al buscar al usuario:", err);
        res.status(500).send("Error en el servidor");
    }
});

router.get("/economicos", authenticateToken, async (req, res) => {
    try {
        // Verificar si el usuario ha iniciado sesión
        if (req.user.username) {
            // Encontrar al usuario en la base de datos por el nombre de usuario
            const student = await Student.findOne({ username: req.user.username });
            if (student) {

                res.render("economicos", {
                    heading: "Aspectos Economicos",
                    conquienvives: student.aspectosEconomicos.conquienvives,
                    casadondevives: student.aspectosEconomicos.casadondevives,
                    profesionpapa: student.aspectosEconomicos.profesionpapa,
                    profesionmama: student.aspectosEconomicos.profesionmama,
                    cuentasconbeca: student.aspectosEconomicos.cuentasconbeca,
                    tipodebeca: student.aspectosEconomicos.tipodebeca,
                    nombrebeca: student.aspectosEconomicos.nombrebeca,
                    tieneshermanos: student.aspectosEconomicos.tieneshermanos,
                    cuantoshermanos: student.aspectosEconomicos.cuantoshermanos,
                    padreomadre: student.aspectosEconomicos.padreomadre,
                    cuantoshijos: student.aspectosEconomicos.cuantoshijos,
                    trabajas: student.aspectosEconomicos.trabajas,
                    dondetrabajas: student.aspectosEconomicos.dondetrabajas,
                    horariolaboral: student.aspectosEconomicos.horariolaboral,
                    sexo: student.aspectosPersonales.sexo,
                    embarazo: student.aspectosEconomicos.embarazo,
                    username: student.username
                });
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } else {
            res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
        }
    } catch (err) {
        console.error("Error al buscar al usuario:", err);
        res.status(500).send("Error en el servidor");
    }
});

router.get("/salud", authenticateToken, async (req, res) => {
    try {
        // Verificar si el usuario ha iniciado sesión
        if (req.user.username) {
            // Encontrar al usuario en la base de datos por el nombre de usuario
            const student = await Student.findOne({ username: req.user.username });
            if (student) {

                res.render("salud", {
                    heading: "Aspectos de Salud",
                    enfermadadcronica: student.aspectosSalud.enfermadadcronica,
                    queenfermedad: student.aspectosSalud.queenfermedad,
                    otraenfermedad: student.aspectosSalud.otraenfermedad,
                    tomamedicamento: student.aspectosSalud.tomamedicamento,
                    medicamentoyfrecuencia: student.aspectosSalud.medicamentoyfrecuencia,
                    tienediscapacidad: student.aspectosSalud.tienediscapacidad,
                    tipodiscapacidad: student.aspectosSalud.tipodiscapacidad,
                    condicionpsicosocial: student.aspectosSalud.condicionpsicosocial,
                    tipocondicion: student.aspectosSalud.tipocondicion,
                    bebidasalcoholicas: student.aspectosSalud.bebidasalcoholicas,
                    frecuenciabebidas: student.aspectosSalud.frecuenciabebidas,
                    fumas: student.aspectosSalud.fumas,
                    frecuenciafumas: student.aspectosSalud.frecuenciafumas,
                    username: student.username
                });
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } else {
            res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
        }
    } catch (err) {
        console.error("Error al buscar al usuario:", err);
        res.status(500).send("Error en el servidor");
    }
});

// Ruta para guardar los datos enviados desde el formulario
router.post("/guardarPersonales", authenticateToken, async (req, res) => {
    // Verificar si el usuario ha iniciado sesión
    console.log(req.body);
    if (req.user.username) {
        // Obtener el nombre de usuario del formulario de inicio de sesión
        const username = req.user.username;

        // Buscar al usuario por el nombre de usuario
        try {
            const student = await Student.findOne({ username });
            if (student) {
                // Crear el objeto "aspectosPersonales" solo si los datos son enviados
                student.aspectosPersonales.sexo = req.body.sexo;
                student.aspectosPersonales.email = req.body.email;
                student.aspectosPersonales.fechadenacimiento = req.body.fechadenacimiento;
                student.aspectosPersonales.carrera = req.body.carrera;
                student.aspectosPersonales.area = req.body.area;
                student.aspectosPersonales.grupo = req.body.grupo;
                student.aspectosPersonales.grado = req.body.grado;
                student.aspectosPersonales.telefono = req.body.telefono;
                student.aspectosPersonales.telefonoemergencia = req.body.telefonoemergencia;
                student.aspectosPersonales.dequieneseltelefono = req.body.dequieneseltelefono;
                student.aspectosPersonales.telefonoemergencia2 = req.body.telefonoemergencia2;
                student.aspectosPersonales.dequieneseltelefono2 = req.body.dequieneseltelefono2;
                await student.save();

                console.log("Datos guardados exitosamente en la base de datos.");
                res.redirect("/personales");
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al guardar los datos:", error);
            res.redirect("/personales");
        }
    } else {
        res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
    }
});

// Ruta para guardar los datos enviados desde el formulario
router.post("/guardarAcademicos", authenticateToken, async (req, res) => {
    // Verificar si el usuario ha iniciado sesión
    console.log(req.body);
    if (req.user.username) {
        // Obtener el nombre de usuario del formulario de inicio de sesión
        const username = req.user.username;

        // Buscar al usuario por el nombre de usuario
        try {
            const student = await Student.findOne({ username });
            if (student) {
                
                student.aspectosAcademicos.bachilleratoegresado = req.body.bachilleratoegresado;
                student.aspectosAcademicos.otrobachillerato = req.body.otrobachillerato;
                student.aspectosAcademicos.especialidadbachillerato = req.body.especialidadbachillerato;
                student.aspectosAcademicos.promediogeneral = req.body.promediogeneral;
                student.aspectosAcademicos.materiasdificultan = req.body.materiasdificultan;
                student.aspectosAcademicos.tecnicasdeestudio = req.body.tecnicasdeestudio;
                student.aspectosAcademicos.examenceneval = req.body.examenceneval;
                student.aspectosAcademicos.exameninterno = req.body.exameninterno;
                student.aspectosAcademicos.calificacioninterno = req.body.calificacioninterno;
                await student.save();

                console.log("Datos guardados exitosamente en la base de datos.");
                res.redirect("/academicos");
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al guardar los datos:", error);
            res.redirect("/academicos");
        }
    } else {
        res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
    }
});

router.post("/guardarEconomicos", authenticateToken, async (req, res) => {
    // Verificar si el usuario ha iniciado sesión
    console.log(req.body);
    if (req.user.username) {
        // Obtener el nombre de usuario del formulario de inicio de sesión
        const username = req.user.username;

        // Buscar al usuario por el nombre de usuario
        try {
            const student = await Student.findOne({ username });
            if (student) {
                // Crear el objeto "aspectosPersonales" solo si los datos son enviados
                student.aspectosPersonales.sexo = req.body.sexo;
                student.aspectosEconomicos.conquienvives = req.body.conquienvives;
                student.aspectosEconomicos.casadondevives = req.body.casadondevives;
                student.aspectosEconomicos.profesionpapa = req.body.profesionpapa;
                student.aspectosEconomicos.profesionmama = req.body.profesionmama;
                student.aspectosEconomicos.cuentasconbeca = req.body.cuentasconbeca;
                student.aspectosEconomicos.tipodebeca = req.body.tipodebeca;
                student.aspectosEconomicos.nombrebeca = req.body.nombrebeca;
                student.aspectosEconomicos.tieneshermanos = req.body.tieneshermanos;
                student.aspectosEconomicos.cuantoshermanos = req.body.cuantoshermanos;
                student.aspectosEconomicos.padreomadre = req.body.padreomadre;
                student.aspectosEconomicos.cuantoshijos = req.body.cuantoshijos;
                student.aspectosEconomicos.trabajas = req.body.trabajas;
                student.aspectosEconomicos.dondetrabajas = req.body.dondetrabajas;
                student.aspectosEconomicos.horariolaboral = req.body.horariolaboral;
                student.aspectosEconomicos.embarazo = req.body.embarazo;
                await student.save();

                console.log("Datos guardados exitosamente en la base de datos.");
                res.redirect("/economicos");
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al guardar los datos:", error);
            res.redirect("/economicos");
        }
    } else {
        res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
    }
});

router.post("/guardarSalud", authenticateToken, async (req, res) => {
    // Verificar si el usuario ha iniciado sesión
    console.log(req.body);
    if (req.user.username) {
        // Obtener el nombre de usuario del formulario de inicio de sesión
        const username = req.user.username;

        // Buscar al usuario por el nombre de usuario
        try {
            const student = await Student.findOne({ username });
            if (student) {
                // Crear el objeto "aspectosPersonales" solo si los datos son enviados
                student.aspectosSalud.enfermadadcronica = req.body.enfermadadcronica;
                student.aspectosSalud.queenfermedad = req.body.queenfermedad;
                student.aspectosSalud.otraenfermedad = req.body.otraenfermedad;
                student.aspectosSalud.tomamedicamento = req.body.tomamedicamento;
                student.aspectosSalud.medicamentoyfrecuencia = req.body.medicamentoyfrecuencia;
                student.aspectosSalud.tienediscapacidad = req.body.tienediscapacidad;
                student.aspectosSalud.tipodiscapacidad = req.body.tipodiscapacidad;
                student.aspectosSalud.condicionpsicosocial = req.body.condicionpsicosocial;
                student.aspectosSalud.tipocondicion = req.body.tipocondicion;
                student.aspectosSalud.bebidasalcoholicas = req.body.bebidasalcoholicas;
                student.aspectosSalud.frecuenciabebidas = req.body.frecuenciabebidas;
                student.aspectosSalud.fumas = req.body.fumas;
                student.aspectosSalud.frecuenciafumas = req.body.frecuenciafumas;
                await student.save();

                console.log("Datos guardados exitosamente en la base de datos.");
                res.redirect("/salud");
            } else {
                console.log("Usuario no encontrado en la base de datos.");
                res.status(404).send("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error al guardar los datos:", error);
            res.redirect("/salud");
        }
    } else {
        res.redirect("/"); // Redirigir al inicio de sesión si el usuario no ha iniciado sesión
    }
});