import express from "express";
import mongoose from "mongoose";
import categoryRouter from "./src/routes/category";
import productRouter from "./src/routes/product";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", categoryRouter);
app.use("/api", productRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/angular")
  .then(() => console.log("Kết nối tới MongoDB đã được thiết lập thành công!"))
  .catch((err) => console.log("Lỗi kết nối tới MongoDB:", err));

export const viteNodeApp = app;
