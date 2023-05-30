import express from "express";
const app = express();

app.listen(8080, () => {
  console.log("chạy ngon");
});

export const viteNodeApp = app;
