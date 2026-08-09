const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,       // required so the browser sends the cookie over HTTPS cross-site
  sameSite: "none",   // required for cross-domain cookies (Amplify -> Render)
  maxAge: 1000 * 60 * 60 * 24, // 1 day
};

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });

    const token = createSecretToken(user._id);
    res.cookie("token", token, COOKIE_OPTIONS);
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user: { _id: user._id, email: user.email, username: user.username }, });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, COOKIE_OPTIONS);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: { _id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports.Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.status(200).json({ message: "Logged out successfully" });
};