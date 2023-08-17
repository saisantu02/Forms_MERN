const mongoose = require("mongoose");
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connnected to DB successfully");
    }catch(err){
        console.log("Connection failed :",err);
    }
    
}
module.exports = connectDB;