const mongoose = require('mongoose');
const codeSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    a: {type: String},
    b: {type: String},
    c: {type: String},
    d: {type: String},
    answer: {type: String, required: true},
})

module.exports = mongoose.model('code', codeSchema)