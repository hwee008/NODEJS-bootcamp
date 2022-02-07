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
router.get('/aboutus',(req,res)=>{
    res.send("You are on the about us route")
})

router.post('/addemployee',(req,res)=>{
    let empName = req.body.empName
    let empPass = req.body.empPass;
    res.end(`Post was sucessful , we got ${empName} and ${empPass}`);
});
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})