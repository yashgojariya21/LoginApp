const express = require("express");
const router = express.Router();

const register = require("../controller/user_controller");

router.post("/", register.register); // ✅ Access function properly

module.exports = router;
