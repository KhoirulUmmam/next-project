const mongoose = require('mongoose');

async function connectDb() {
    try{
        const MONGO_URI = 'mongodb://localhost:27017/next3crud';
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connect to MongoDB localhost");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDb;