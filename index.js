const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        
        app
            .use(cors())
            .use(express.json())
            .use("/", require('./routes'));
        
        app.listen(PORT, ()=>{
            console.log(`Listening on port ${PORT}`);
        });

    })