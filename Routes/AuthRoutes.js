const { Signup, Login, Verify } = require("../Controllers/AuthController")
const router = require("express").Router()

router.post("/signup", Signup)
router.post("/login", Login)
router.post("/verify", Verify)

module.exports = router
