express=require("express");
mongoose=require("mongoose");
require("dotenv/config");
var cors = require('cors')
mongoose.connect(
    process.env.MONGO_URL,
    () => {
      console.log("You're connected to the database");
    }
  );
const app=express();
app.use(express.json());
app.use(cors())
app.use('/', require('./routes/userRoute.js'))
app.listen(process.env.PORT,()=> console.log('listening on port '+ process.env.PORT))
