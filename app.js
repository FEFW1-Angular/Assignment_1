import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/angular")
  .then(() => console.log("Kết nối tới MongoDB đã được thiết lập thành công!"))
  .catch(err => console.log("Lỗi kết nối tới MongoDB:", err));


export const viteNodeApp = app;
