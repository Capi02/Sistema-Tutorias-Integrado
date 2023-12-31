const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tutor: {
        type: String,
        default: "Sin asignar",
    }
})

const Group = mongoose.model("Group", groupSchema)
module.exports = Group