const express = require("express");
const cors = require("cors");
const corsConfig = {
    origin: "*",
    credential: true,
    methods: ["GET", "POST"]
};
let app = express();
app.use(cors(corsConfig))
require("./db/db")
app.options("", cors(corsConfig))

const PORT = process.env.PORT || 7000;
const user = require("./models/user_schema");
const user_router = require("./routes/user_routes")

app.use(express.json());

app.get("/data", (req, res) => {
    res.send("Login Api page hi I am Yash Gojariya my Project is this not runnig properly")
})

app.use("/register", user_router);


app.get("/", (req, res) => {
    try {
        const getData = user.find({});
        res.status(200).json({
            message: "Data fetched successfully",
            status: 200,
            data: getData
        });
    } catch (error) {
        console.log(error);

    }
})

app.listen(PORT, () => {
    console.log(`seerver listed at ${PORT}`);
})