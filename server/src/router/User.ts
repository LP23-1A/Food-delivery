import express from "express";
import { userRegistration, login } from "../controller/User";
import { encrypt } from "../middleware";

const auth = express.Router();

auth.post("/register", encrypt, userRegistration);
auth.post("/login", login);

export { auth };
