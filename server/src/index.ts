import express from "express";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { auth } from "./router/User";
import { order } from "./router/Order";
import { food } from "./router/Food";
import { category } from "./router/Category";

const PORT = process.env.PORT || 8000;
// Database connection
connectDatabase();

const start = () => {
  const app = express();

  // Middleware s
  app.use(cors({ origin: "*" }));
  app.use(express.json());

  // Routes
  app.use("/user", auth);
  app.use("/order", order);
  app.use("/food", food);
  app.use("/category", category);

  // Default route
  app.get("/", (_req, res) => {
    res.status(200).send({ success: true, msg: "Hello world" });
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
