import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


export const registerUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      fullName,
      gender,
      dateOfBirth,
      country,
    } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });
    const user = await User.create({
      username,
      email,
      password,
      fullName,
      gender,
      dateOfBirth,
      country,
    });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export  const searchUser = async (req, res) => {
  try {
    const { query } = req.query;
    console.log(query);
    
    const user = await User.findOne({
      $or: [{ username: query }, { email: query }],
    });
    // const user = await User.findOne({ username: query });

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// This code snippet is a controller that contains functions to register a user, login a user, and search for a user. The registerUser function creates a new user in the database, the loginUser function logs in a user and returns a JWT token, and the searchUser function searches for a user by username or email. If the user is found, the user object is returned in the response. If the user is not found, a 404 status code is sent with a message "User not found". If there is a server error, a 500 status code is sent with a message "Server error". The functions use the User model, jwt, and bcrypt libraries to interact with the database and handle authentication.// Path: models/User.js