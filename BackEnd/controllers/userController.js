import userModal from "../modals/userModal.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { number, password } = req.body;
  try {
    const user = await userModal.findOne({ number });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't exist " });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Login Error" });
  }
};

//create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//ragister user
const ragisterUser = async (req, res) => {
  const { name, number, password } = req.body;
  try {
    //cheching is user already exists
    const exists = await userModal.findOne({ number });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating number format & strong password
    if (!/^[6-9]\d{9}$/.test(number)) {
      return res.json({
        success: false,
        message: "Please enter a valid 10-digit Indian mobile number",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message:
          "Please enter the strong passward which is more then 8 charecter",
      });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModal({
      name: name,
      number: number,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, ragisterUser };
