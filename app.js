const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.uri)
    .then(() => {
        console.log("MongoDB connected successfully😁");
    })
    .catch((error) => {
        console.log("Error is", error);
    });

    
// Express server
app.listen(PORT, () => {
    console.log("Server running at -->", PORT);
});













