const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    type: {type: String, required: true},
    img: {type: String, required: true}
})

module.exports = mongoose.model('category', categorySchema)