const mongoose = require("mongoose");

const Detail = mongoose.Schema({
    bandname:String,
    brandconurl:String,
    links:[
        {
            lable:String,
            url:String
        }
    ],
})

module.exports = mongoose.model("detail",Detail);