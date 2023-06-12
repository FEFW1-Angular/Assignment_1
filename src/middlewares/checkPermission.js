import jwt from "jsonwebtoken";
import User from "../models/user";
export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const { id } = jwt.verify(token, "token");
    const user = await User.findById(id);
    console.log(user);
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Không phận sự miễn động chạm",
      });
    }
    next();
  } catch (error) {
    return res.status(403).json({
        message: error.message,
    });
  }
};