const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const router = Router();
const bodyParser = require('body-parser');

const app = express();

const citaSchema = new mongoose.Schema({
    horaInicio: {
        type: Date,
        required: true
    },
    horaFinal: {
        type: Date,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaCita: {
        type: Date,
        required: true
    },
    numeroEmpleado: {
        type: Number,
        required: true
    },
    estadoCita: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta para obtener todos los eventos
app.get('/cita-psicologia', (req, res) => {
    Event.find({}, (err, events) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(events);
        }
    });
});

// Ruta para crear un nuevo evento
app.post('/cita-psicologia', (req, res) => {
    const newEvent = new Event({
        start: req.body.start,
        end: req.body.end
    });

    newEvent.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(newEvent);
        }
    });
});