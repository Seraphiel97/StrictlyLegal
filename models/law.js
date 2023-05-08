const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lawSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true,
    },
    question: {
        type: String,
        maxLength: 150,
        required: true,
    },
    answer: {
        type: String,
        maxLength: 150,
        required: true,
    },
    penalty: {
        type: String,
        maxLength: 150,
    },
    reference: {
        type: String,
    },
    verification: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Law', lawSchema)