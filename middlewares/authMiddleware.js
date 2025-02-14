import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
// This code snippet is a middleware that verifies the token sent by the client. If the token is valid, the user object is added to the request object and the next middleware is called. If the token is invalid, a 400 status code is sent with a message "Invalid token".