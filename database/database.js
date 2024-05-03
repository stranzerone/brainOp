const mongoose = require('mongoose');
require("dotenv").config({ path: ".env" });
const connect = async()=>{

    try{

    
    await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to Db");
}catch(error){
    console.log(error)
}
}

module.exports = {connect};

