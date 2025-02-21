const express = require("express");
const router = express.Router();

const { register, data } = require("../controller/user_controller")

router.route("/").post(register);
router.route("/data").get(data);


module.exports = router;