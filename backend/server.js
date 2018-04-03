const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let data = require('./Data');

app.use(bodyParser.json());

app.use((req, res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
})

const api = express.Router();

api.post('/users', (req, res) => {
    console.log("ok")
});

app.use('/api', api);

const port  = 3000;
 