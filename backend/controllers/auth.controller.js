import { errorHandler } from "../utils/errorHandler.js";
import User from "../models/user.model.js";

import validateEmail from "../utils/validateEmail.js";
import bcryptjs from "bcryptjs";
import { JWT_TOKEN, PASSWORD_EMAIL, USER_EMAIL } from "../config.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const register = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return next(errorHandler(400, "Please, fill all input!"));
  }

  if (!validateEmail(email)) {
    return next(errorHandler(400, "Invalid email!"));
  }

  if (password != confirmPassword) {
    return next(errorHandler(400, "Password not match!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  const { password: pass, ...rest } = newUser._doc;

  try {
    const emailExist = await User.findOne({ email });

    if (emailExist)
      return next(errorHandler(409, "Email is already registered!"));

    await newUser.save();

    res.status(201).json({ message: "User created succesfully", data: rest });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!email || !password) {
      return next(errorHandler(400, "Please, fill all input!"));
    }

    if (!validateEmail(email)) {
      return next(errorHandler(400, "Invalid email!"));
    }

    if (!validUser) return next(errorHandler(404, "User not found!"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Wrong password!"));

    const token = jwt.sign({ id: validUser._id }, JWT_TOKEN, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token)
      .status(200)
      .json({ ...rest, token });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "User has been logout!" });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(errorHandler(404, "User not found!"));

  const token = jwt.sign({ id: user._id }, JWT_TOKEN, {
    expiresIn: "1d",
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: USER_EMAIL,
      pass: PASSWORD_EMAIL,
    },
  });

  const mailOptions = {
    from: USER_EMAIL,
    to: email,
    subject: "Reset Password",
    text: `
    You've requested to reset password. Click link below to reset your password!

    https://coding-studio-fp.vercel.app/reset_password/${user._id}/${token}
    
    Note: If you never request to reset your password. Please, ignore this message!
    `,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        next(errorHandler(500, error));
      } else {
        return res.status(200).json({ message: "Email sent!" });
      }
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const isVerified = jwt.verify(token, JWT_TOKEN);

  if (!isVerified) {
    return next(
      errorHandler(403, "Insufficient permissions to access this resource")
    );
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const updateUser = await User.findByIdAndUpdate(
    { _id: id },
    { password: hashedPassword }
  );

  const { password: pass, ...rest } = updateUser._doc;

  try {
    res.status(201).json({ message: "User updated succesfully", data: rest });
  } catch (error) {
    next(error);
  }
};
