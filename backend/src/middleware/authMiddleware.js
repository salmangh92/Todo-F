import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("bearer")) {
      return res.status(401).json({
        message: "Nicht autorisiert",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User nicht gefunden",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Ungültiger oder abgelaufener Token",
    });
  }
};

export default authMiddleware;
