// Bring back the http package
import express from 'express';
const app =express();

const http = require('http');
const hostname = "localhost";
const port =8000;
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send(`Node and Express server is running on port ${port}`)
});

app.post('/addemployee',(req,res)=>{
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end(`POST was successful ${empName},${empPass}`);
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})