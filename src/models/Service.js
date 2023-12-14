const mongoose = require("mongoose");

const Service = new mongoose.Schema({
    icon:String,
    title:String,
    discription:String,
    linkText:String,
    link:String
});

module.exports = mongoose.model('services',Service);
