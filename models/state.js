const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('State', stateSchema)