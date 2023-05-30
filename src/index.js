const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.get('/', (req, res)=>{
    res.send("welcome to my api");
});

class App{
    constructor(){
        this.userRutes = require('./routes/clientes.js');
        this.app = app;
        this.port = process.env.PORT || 9000;
        this.dbConnection();
        this.middleWares();
        this.rutes()
    }
    dbConnection(){
        mongoose
        .connect(process.env.MONGODB_URI)
        .then(()=> console.log("Connected to DB"))
        .catch((error)=>console.error(error));
    }
    middleWares(){
        this.app.use(cors());
        this.app.use(express.json())
    }
    rutes(){
        this.app.use('/api', this.userRutes)
    }
    start(){
        this.app.listen(this.port, ()=>{
            console.log('server running at port' + this.port);
        })
    }
}

const connection = new App();

connection.start()

module.exports = App;