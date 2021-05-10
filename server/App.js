// npm install express
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");


//Init 
const app = express();
const PORT = process.env.PORT || 3000;

// use middlewares
app.use(cors());
app.use(bodyParser.json({limit: '50mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


//Connection to database
const CONNECTION_URL = 'mongodb+srv://Fastya:@Fastya89.com@cluster0.jcthv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>app.listen(PORT,()=>console.log('Server running on port: ${PORT}')))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);

//Using routes
app.use(router);


//server listen
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));