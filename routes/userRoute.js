express=require("express");
const router=express.Router();
const User= require("../models/User.js");

/*********** RETURN ALL USERS *******/

router.get("/",(req, res) => {
    User.find({},(err,data)=>{
        if (err) throw err;
        else 
        res.json(data);
    });
   });

/***** ADD A NEW USER TO THE DATABASE ********/

router.post("/add",(req, res) => {
    let newuser=new User(req.body)
    newuser.save((err,data)=>{
        if (err) throw err;
        else 
        res.json(data);
    });
   });

   /******** EDIT A USER BY ID ****/
   router.put("/edit/:Id", (req, res) => {
    User.findByIdAndUpdate({_id:req.params.Id} , {... req.body}, (err, data) => {
      if (err) {
        throw err 
    }
      else 
      {
        res.send(req.body)
      }
    });
  });
  /******** EDIT A USER BY ID ****/
  router.delete("/delete/:Id", (req, res) => {
    User.findOneAndDelete({_id:req.params.Id}, (err, data) => {
      if (err) {
        throw err 
    }
      else 
      {
        res.send(req.body)
      }
    });
  });



module.exports= router;