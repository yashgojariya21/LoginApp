const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yashgojariya354:yashgojariya@cluster0.t8m18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0LoginData", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB();


