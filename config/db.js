const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/chitchatuser?directConnection=true&tls=false&readPreference=primary"

const connectToMongo = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected successfully to ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}

module.exports = connectToMongo;