const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { EncodeToken } = require("../utility/tokenHelper");
//! Create User
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userModel.create({ email, password });

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

//! User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email not match!",
      });
    }

    // isMatch password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = EncodeToken(user.email, user._id);

      const option = {
        maxAge: process.env.Cookie_Expire_Time,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };

      // Set cookie
      res.cookie("token", token, option);

      res.status(200).json({
        success: true,
        message: "Login success.",
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password not match!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

//! get User
exports.user = async (req, res) => {
  try {
    const email = req.headers.email;

    const matchStage = {
      $match: { email },
    };

    const project = {
      $project: {
        password: 0,
      },
    };

    const result = await userModel.aggregate([matchStage, project]);

    res.status(200).json({
      success: true,
      result: result[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

//! user Logout
exports.logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logout success.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};

//! update user
exports.update = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userId = req.headers._id;

    const updatedData = { email };

    // যদি password ফিল্ড থাকে, তবে সেটি bcrypt দিয়ে হ্যাশ করে আপডেট করতে হবে।
    if (password) {
      const hashPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashPassword;
    }
    // update user
    await userModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "User data update.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong!",
    });
  }
};
