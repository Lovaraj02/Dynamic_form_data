const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const employeeRoute = require('./routes/employeeRoutes')

const app = express();
dotenv.config();
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.uri)
    .then(() => {
        console.log("MongoDB connected successfully😁");
    })
    .catch((error) => {
        console.log("Error is", error);
    });


app.use('/employees',employeeRoute)

    
// Express server
app.listen(PORT, () => {
    console.log("Server running at -->", PORT);
});















// -------------------middle ware-------------------

// const express = require('express');
// const app = express();
// const PORT = 5001;

// const first = (req, res, next) => {
//     if (1 < 30) {
//         next();
//     }
// };

// const second = (req, res, next) => {
//     if (1 < 30) {
//         next();
//     }
// };

// const third = (req, res, next) => {
//     if (1 > 30) {
//         next();
//     } else {
//         res.status(403).send("Access denied by third middleware");
//     }
// };

// app.get('/home', first, (req, res) => {
//     res.send("Welcome to Home");
// });

// app.get('/about', second, (req, res) => {
//     res.send("Welcome to About");
// });

// app.get('/cart', third, (req, res) => {
//     res.send("Welcome to Cart");
// });

// app.listen(PORT, () => {
//     console.log("Server is running on port", PORT);
// });










