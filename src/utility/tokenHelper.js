const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, _id) => {
  const key = process.env.JWT_KEY;
  const expire = process.env.JWT_Expire_Time;
  const paylaod = { email, _id };

  return jwt.sign(paylaod, key, { expiresIn: expire });
};

exports.decodeToken = (token) => {
  try {
    const key = process.env.JWT_KEY;
    const decode = jwt.verify(token, key);
    return decode;
  } catch (error) {
    return null;
  }
};
