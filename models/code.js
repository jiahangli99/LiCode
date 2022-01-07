const mongoose = require('mongoose');
const codeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    d: {type: String},
    a: {type: String},
    b: {type: String},
    c: {type: String},
    answer: {type: String, required: true},
})

module.exports = mongoose.model('code', codeSchema)