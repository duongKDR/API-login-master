

const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return responeInstance.error400(res, jsonInstance.jsonNoData("A token is required for authentication"));
  }
  try {
    const decoded = jwt.verify(token, config.JWT_KEY);
    
    req.user = decoded;
  } catch (err) {
    return responeInstance.error400(res, jsonInstance.jsonNoData("Invalid Token"));
  }
  return next();
};

module.exports = verifyToken;