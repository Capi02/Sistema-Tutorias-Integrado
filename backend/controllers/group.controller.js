const Group = require("../models/Group.model");
const Student = require("../models/Student.model");

const createGroup = async (req, res) => {
    const { groupName } = req.body;

    try {
        if (groupName === "") {
            res.status(400).json({ message: "El nombre del grupo se encuentra vacio" });
        }
        else if (groupName.length > 2) {
            res.status(400).json({ error: "El nombre del grupo no puede contener mas de 2 caracteres" })
        }

        const newGroup = new Group({
            name: groupName.toUpperCase(),
        })
        await newGroup.save();
        res.status(201).json({ message: "Grupo creado correctamente!" });

    } catch (error) {
        console.log(error)
    }
}

const showGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los grupos" });
    }
}

const showStudentsByGroup = async (req, res) => {

    try {
        const { group } = req.params;
        const grade = group.charAt(0);
        const groupName = group.charAt(1);

        const students = await Student.find({
            "aspectosPersonales.grado": grade,
            "aspectosPersonales.grupo": groupName
        });

        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los estudiantes" });
    }
};



const deleteGroup = async (req, res) => {

    const { id } = req.params;

    try {
        const deletedGroup = await Group.findByIdAndDelete(id);
        if (deletedGroup) {
            res.status(200).json({ message: 'Grupo eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Grupo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el grupo' });
    }
}

module.exports = {
    createGroup,
    showGroups,
    deleteGroup,
    showStudentsByGroup
}