import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.models.js";

export const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Hash user password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Add new user
    await UserModel.create({ username, password: hashedPassword });
    // Return response
    res.status(201).json('User registered successfully!');
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find one user with username
    const findOneResult = await UserModel.findOne({ username });
    if (!findOneResult) {
      return res.status(404).json('No user found!');
    }
    // Compare passwords
    const validPassword = bcrypt.compareSync(password, findOneResult.password);
    if (!validPassword) {
      return res.status(401).json("Invalid password provided for user!");
    }
    // Generate JWT for user
    const token = jwt.sign({ id: findOneResult._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    // Return response
    res.status(200).json({
      message: "User login successful!",
      accessToken: token
    });
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res) => {
  // Find user with id
  const findByIdResult = await UserModel.findById(req.auth.id).select({ password: 0 });
  if (!findByIdResult) {
    return res.status(404).json('No user found!');
  }
  // Return response
  res.status(200).json(findByIdResult);
};

export const logoutUser = async (req, res) => {
  // User will be logged out by clearing their token from the backend
  // Later on we can look at having a Token model to track and invalidate tokens on the server
  res.status(501).json("User logout not implemented!");
};