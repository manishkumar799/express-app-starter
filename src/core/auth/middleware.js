// middleware.js
const jwt = require("./jwt");

exports.authenticate = (req, res, next) => {
  let token;

  // Check cookie first (web clients)
  if (req.cookies?.accessToken) {
    token = req.cookies.accessToken;
  }
  // Check authorization header (mobile clients)
  else if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verifyToken(token);
    req.user = decoded; // attach user payload to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permissions" });
    }
    next();
  };
};
