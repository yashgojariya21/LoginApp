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
const login_router = require("./routes/login_router")

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.use("/register", user_router);
app.use("/login", login_router)


app.get("/data", async (req, res) => {
    try {
        const getData = await user.find({});
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