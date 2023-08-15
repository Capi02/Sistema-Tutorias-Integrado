const Group = require("../models/Group.model");

const createGroup = async (req, res) => {
    const { groupName } = req.body;

    try {
        const newGroup = new Group({
            name: groupName
        })

        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
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

const deleteGroup = async (req, res) => {

    const groupId = req.params.groupId;

    try {
        const deletedGroup = await Group.findByIdAndDelete(groupId);
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
}