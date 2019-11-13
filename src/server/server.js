const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;
const routes = require('./routes');


app.use(cors());
app.use(bodyParser.json());
//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('db connection established');
    
});


app.use('/blog', routes);
app.listen(PORT, () => {
    console.log("server is running on PORT", PORT)
});