import express from "express";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { auth } from "./router/User";

const PORT = process.env.PORT || 8000;
// Database connection
connectDatabase();

const start = () => {
  const app = express();

  // Middleware s
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use("/auth", auth);

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
