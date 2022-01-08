const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    cat: {type: String, required: true},
    type: {type: String, required: true},
    img: {type: String, required: true}
})

module.exports = mongoose.model('category', categorySchema)