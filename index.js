const express = require("express");
const {addContact,contact} = require("./backEndLogic");

const contactApp = express();
contactApp.use(express.jspn());

const PORT = 3000;

contactApp.get("/contact",(req,res) =>{
    res.json(contact);
});

contactApp.post("/contact",(req,res) =>{
    /*
    // This was my version
    const {name: name} = req.body;
    const {mobile: mobile} = req.body;
    const {address: address} = req.body;
    const {email: email} = req.body;
    const item = {
        name: name,
        mobile: mobile,
        address: address,
        email: email
    }
        */
    
    const{name, mobile, address, email} = req.body;
    const item = {name, mobile, address, email};
    

    // shortest version while being explicit

   // const item = (({name, mobile, address, email}) => ({name, mobile, address, email}))(req.body);
    
    try{
        const newContact = addContact(item);
        res.json(newContact);
    } catch(err){
        res.status(400).json({error: err.message })
    }

});


contactApp.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});

