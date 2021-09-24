const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const userSchema= new Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    adress:
    {
        type:String,
    },
    phonenumber:
    {
        type:Number,
    },

})

 const User=mongoose.model("users",userSchema)
 module.exports=User;