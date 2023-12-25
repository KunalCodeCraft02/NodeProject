const mongoose = require("mongoose");
const Slider = new mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String
})

module.exports = mongoose.model('slider',Slider);
