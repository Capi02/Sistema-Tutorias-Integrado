const express = require('express');
const router = express.Router();
const Cita = require('../models/Citas');

// Obtener todas las citas
router.get('/', async (req, res) => {
    try {
        const citas = await Cita.find();
        res.json(citas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear una nueva cita
router.post('/', async (req, res) => {
    const cita = new Cita({
        horaInicio: req.body.horaInicio,
        horaFinal: req.body.horaFinal,
        // Aquí puedes agregar los demás campos que necesites
        matricula: req.body.matricula,
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        email: req.body.email,
        telefono: req.body.telefono,
        fechaCita: req.body.fechaCita,
        fechaCreacion: req.body.fechaCreacion,
        estadoCita: req.body.estadoCita,
    });

    try {
        const newCita = await cita.save();
        res.status(201).json(newCita);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Aquí podrías agregar rutas para actualizar y eliminar citas si lo necesitas

module.exports = router;