const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    //email: String
    //
});

const login =mongoose.model('login',loginSchema);

export default login;