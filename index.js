// Bring back the http package
import express from 'express';
const app =express();
const router = express.Router();
const http = require('http');
const hostname = "localhost";
const port =8000;
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//
router.get('/',(req,res)=>{
    res.send("hello from skillsoft")
})

router.post('/addemployee',(req,res)=>{
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end(`POST was successful ${empName},${empPass}`);
})
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})