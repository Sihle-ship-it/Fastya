// npm install express
//const express = require("express");
import express from 'express';
//const bodyParser = require("body-parser");
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/routes.js';
//const mongoose = require("mongoose");
//const cors = require("cors");
//const router = require("./routes/routes");

//Init
const app = express();
const PORT = process.env.PORT || 100;

// use middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//Connection to database
//const CONNECTION_URL =
 // "mongodb+srv://Sihle:abXD5pBFgwj04T9k@cluster0.jcthv.mongodb.net/Fastya?retryWrites=true&w=majority";
const CONN="mongodb+srv://Fastya:asdfghjkl@cluster0.hcsch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(`Database is running`)
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

app.use('/user',userRoutes);
//server listen
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));
