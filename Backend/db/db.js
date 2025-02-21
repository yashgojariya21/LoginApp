const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yashgojariya354:Yash1382005@cluster0.t8m18.mongodb.net/LoginData", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB;


