const routes = function(){
    router.get('/',(req,res)=>{
        res.send("Hello from skillsoft")
    });
    
    router.get('/aboutus',(req,res)=>{
        res.send("You are on the about us route")
    });
    
    router.post('/addemployee',(req,res)=>{
        let empName = req.body.empName
        let empPass = req.body.empPass;
        res.end(`Post was sucessful , we got ${empName} and ${empPass}`);
    });
};

export default routes;