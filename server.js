const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
var cors = require('cors')
//const http= require('http');
const api = require('./server/routes/api');
const port =3000;
const app =express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use('/api',api);
app.use('/uploads', express.static('uploads'));
app.get('*',(req,res) => { res.sendFile(path.join(__dirname,'dist/index.html'));
});
app.listen(port,function(){
	console.log("server running on local host:"+port);
});
