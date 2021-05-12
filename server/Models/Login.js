const mongoose = require("mongoose");


const LoginSchema= new mongoose.Schema({
    // initializing the post model data

    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
});

//Model
const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
