const mongoose = require('mongoose');
const htmlSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    d: {type: String},
    a: {type: String},
    b: {type: String},
    c: {type: String},
    answer: {type: String, required: true},
})

module.exports = mongoose.model('html', htmlSchema)