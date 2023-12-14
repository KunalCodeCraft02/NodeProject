const express = require("express");

const routes = express.Router();
const detail = require("../models/details");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
const Contact = require("../models/Contact")

routes.get("/", async(req,res)=>{
    const details = await detail.findOne({"_id":"6576af6f2899b6d0d12d541a"})
    const slides  = await Slider.find()
    const services = await Service.find()
    
    // console.log(slides)
    res.render('index',{
        details:details,
        slides:slides,
        services:services
    });
});
routes.get("/gallery",async(req,res)=>{
    const details = await detail.findOne({"_id":"6576af6f2899b6d0d12d541a"})
    res.render('gallery',{
        details:details
    });
});
routes.post("/process-contact-form",async(req,res)=>{
    console.log("form is submitted")
    // console.log(req.body)

    try{
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
});


module.exports = routes;
