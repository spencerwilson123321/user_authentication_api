const User = require("../Models/UserModel")
const { createSecretToken } = require("../Util/SecretToken")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

module.exports.Login = async (request, response, next) => {
    try {
        const { email, password } = request.body
        if (!email || !password) {
            return response.json({ success: false, message: "email or password is missing." })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return response.json({ success: false, message: "Incorrect email or password." })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return response.json({ success: false, message: "Incorrect email or password." })
        }
        const token = createSecretToken(user._id)
        response.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })
        response.status(201).json({ success: true, messsage: "User logged in successfully." })
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports.Verify = (request, response) => {
    const token = request.cookies.token
    if (!token) {
        return response.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (error, data) => {
        if (error) {
            return response.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) {
                return response.json({ status: true, username: user.username })
            } else {
                return response.json({ status: false })
            }
        }
    })
}
