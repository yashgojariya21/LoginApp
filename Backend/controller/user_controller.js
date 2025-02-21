const User = require("../models/user_schema"); // Capitalized to indicate it's a model

const register = async (req, res) => {
    const { first_name, last_name, email, password, confirm_password } = req.body;

    if (!first_name || !last_name || !email || !password || !confirm_password) {
        return res.status(400).json({
            message: "error",
            status: 400,
            error: {
                message: "All fields are required"
            }
        });
    }

    const email_check = /@./.test(email);
    if (!email_check) {
        return res.status(400).json({
            message: "error",
            status: 400,
            error: {
                message: "Email is not valid"
            }
        });
    }

    try {
        if (confirm_password === password) {
            const user_login = new User(req.body); // Use "User" instead of "user"
            console.log(req.body);
            const inserSave = await user_login.save();
            return res.json({
                message: "Success",
                status: 200,
                data: inserSave
            });
        } else {
            return res.status(400).json({
                message: "error",
                status: 400,
                error: {
                    message: "Confirm password must match password"
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "error",
            status: 400,
            error: {
                message: "User already exists"
            }
        });
    }
};

const data = async (req, res) => {
    try {
        const getData = await User.find({}); // Use "User" instead of "user"
        res.status(200).json({
            message: "Data fetched successfully",
            status: 200,
            data: getData
        });
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Missing Data",
            status: 400,
            error: [
                { id: "email", message: "Email is required" },
                { id: "password", message: "Password is required" }
            ]
        });
    }

    try {
        const foundUser = await User.findOne({ email: req.body.email }); // Rename "user" to "foundUser"

        if (foundUser) {
            const result = req.body.password === foundUser.password;
            if (result) {
                return res.status(200).json({
                    message: "Successfully logged in",
                    status: 200,
                    data: foundUser
                });
            } else {
                return res.status(400).json({ error: "Invalid password" });
            }
        } else {
            return res.status(400).json({ message: "Invalid username" });
        }
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

module.exports = { register, login, data };
