const mongoose = require("mongoose");

// Define a schema for the Contact model
const contactSchema = new mongoose.Schema({
    email: String,
    phone: Number,
    query: String
});

// Create a model using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
