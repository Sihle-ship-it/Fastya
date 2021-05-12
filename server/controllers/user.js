import User from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/*exports.createUser = (req, res) => {
        const username = req.body.username;
    const email = req.body.email;
    const gender = req.body.gender;
    const password = req.body.password;//jwt bcrypt 
  
    User.create({ username, email, gender, password }).then((username) => {
      res.json(username);
    });
  };*/

  export const signIn= async (req,res)=>{
    const {email, password} =req.body;

    try {
      const userExist= await User.findOne({email});

      if(!userExist) return res.status(404).json({message: "User does not exist."});

      const isPasswordCorrect = await bcrypt.compare(password,userExist.password);

      if(!isPasswordCorrect) return res.status(400).json({message: "Bad credintials"});

      const token = jwt.sign({email: userExist.email, user: userExist.name}, 'test', {expiresIn: "1h"});

      res.status(200).json({result: userExist, token});

    } catch (error) {
      res.status(500).json({message: "Something went wrong."});
    }
      res.send('This.....');
  }

  export const signUp = async (req,res)=>{
    
    const { firstName,phoneNumber,LastName,email,password,confirmPassword} = req.body;

    try {
      const userExist = await User.findOne({email});

      if(userExist) return res.status(400).json({message: "User already exist."});

      if(password !== confirmPassword) return res.status(400).json({message: "Password dont match."});
      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({email, password: hashedPassword,name: `${firstName}  ${LastName}`,phoneNumber});

      const token= jwt.sign({email: result.email, name : result.name}, 'test', {expiresIn: "1h"});
      res.status(200).json(result,token);

    } catch (error) {
      res.status(500).json({message: "Something went wrong"});
    }
  }