const mongoose = require("mongoose");

const connectDb = async () => {
    try{
       await mongoose.connect("mongodb+srv://robert:ogunbajo123@cluster0.4a1tw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDb