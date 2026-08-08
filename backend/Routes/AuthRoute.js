const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { verifyToken } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;