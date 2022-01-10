const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema ({
    email: String,
    password: String,
}, { timestamps: true})
module.exports = mongoose.model('Admin', adminSchema);