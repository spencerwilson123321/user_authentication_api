const User = require("../Models/UserModel")
const { createSecretToken } = require("../Util/SecretToken")
const bcrypt = require("bcryptjs")

module.exports.Signup = async (request, response, next) => {
    try {
        const { email, username, password, createdAt } = request.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return response.json({ success: false, message: "User already exists." })
        }
        const user = await User.create({ email, password, username, createdAt })
        const token = createSecretToken(user._id)
        response.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })
        response.status(201).json({ success: true, message: "User created successfully." })
        next()
    } catch (error) {
        console.log(error)
    }
}
