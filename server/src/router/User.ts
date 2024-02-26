import express from "express";
import { deleteUser, login, signUp, updateUser } from "../controller/User";
import { encrypt } from "../middleware";

const auth = express.Router();

auth
  .route("/register")
  .post(encrypt, signUp)
  .put(updateUser)
  .delete(deleteUser);
auth.route("/login").post(login);

export { auth };
