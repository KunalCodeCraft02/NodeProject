const express = require("express");
const app = express();
const routes = require("./routes/main");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/details");
const bodyParser = require("body-parser");
const Slider = require("./models/Slider");
const Service = require("./models/Service")
const Contact = require("./models/Contact")

//db connection

mongoose.connect("mongodb://127.0.0.1:27017/WebData")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Something Weng Wrong", err))

// ( Service section Dynamic )

// Service.create([
//     {
//         icon: 'fa-brands fa-accusoft',
//         title: 'Provide Best Editing',
//         discription:'We provide a best video Editing that help you to grow on social media app',
//         linkText:'https://instagram.com',
//         link:'https://instagram.com'
//     },
//     {
//         icon: 'fa-brands fa-affiliatetheme',
//         title: 'Provide Best Editing',
//         discription:'We provide a best video Editing that help you to grow on social media app',
//         linkText:'https://instagram.com',
//         link:'https://instagram.com'
//     },
//     {
//         icon: 'fa-solid fa-wand-magic-sparkles',
//         title: 'Provide Best Editing',
//         discription:'We provide a best video Editing that help you to grow on social media app',
//         linkText:'https://instagram.com',
//         link:'https://instagram.com'
//     },
// ])


//  ( Slider dynamic )
// Slider.create([
//     {
//         title: "Build Your Own Posters and Banners",
//         subTitle:"create banners and proster with any category",
//         imageUrl: "/static/images/b1.jpg"
//     },
//     {
//         title: "Build Your Own Posters and Banners",
//         subTitle:"create banners and proster with any category",
//         imageUrl: "/static/images/b2.jpg"
//     },
//     {
//         title: "Build Your Own Posters and Banners",
//         subTitle:"create banners and proster with any category",
//         imageUrl: "/static/images/b3.jpg"
//     }
// ])


//  (Dynamic navbar)

// Detail.create({
//     bandname:"Kuldeep Graphics",
//     brandconurl:"https://clipground.com/images/graphic-design-icon-png-4.png",
//     links:[
//         {
//             lable:"Home",
//             url:"/"
//         },
//         {
//             lable:"/Services",
//             url: "/services"
//         },
//         {
//             lable:"Gallary",
//             url:"/gallery"
//         }, 
//         {
//             lable:"About",
//             url:"/about"
//         },
//         {
//             lable:"Contact",
//             url:"/contact"
//         },
//     ]
// });
app.use(bodyParser.urlencoded({
    extended:true
}))
//statc/css/style.css`
app.use('/static', express.static('public'))


// (tamplate engine hbs)
app.set("view engine", 'hbs')
app.set("views", "views")
hbs.registerPartials("views/parcials"); ``

app.use("/", routes);

app.listen(5556, () => {
    console.log("Server Started ")
});

