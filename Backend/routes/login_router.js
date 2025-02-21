const express = require("express");
const router = express.Router();

const login = require("../controller/user_controller");

router.post("/", login.login); // ✅ Access function properly

module.exports = router;
