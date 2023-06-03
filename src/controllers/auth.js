import User from "../models/user";
import { signinSchema,signupSchema } from "../schemas/auth";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = signinSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
        return res.status(400).json({
            message: error.details.map(err => err.message)
        })
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message: 'User not found'})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(400).json({message: 'Password mismatch'})
    }
    const token = jwt.sign({id: user._id},"token");
    return res.status(200).json({message: 'Login successful',accessToken: token,user})
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const { error } = signupSchema.validate(req.body, { abortEarly: false });
      console.log(error);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      user.password = undefined;
      return res.status(200).json({
        message: "Add success",
        user,
      });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
  };
