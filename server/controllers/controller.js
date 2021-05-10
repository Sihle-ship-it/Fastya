const User = require("../models/users.js");

exports.createUser = (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;
    const password = req.body.password;//jwt bcrypt 
  
    User.create({ username, email, gender, password }).then((username) => {
      res.json(username);
    });
  };