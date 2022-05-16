const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    name:{
        type: 'string',
        required: true
    }
    
});

const User = mongoose.model("Category", CategorySchema);

module.exports = User;

