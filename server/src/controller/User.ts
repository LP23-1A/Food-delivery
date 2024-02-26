import { Response, Request } from "express";
import { UserModel } from "../model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type SignUpType = {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, phoneNumber, password }: Required<SignUpType> =
      req.body;
    const result = await UserModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send();
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).send({ msg: "user not found" });
    }

    const isValid = bcrypt.compareSync(password, user.password as string);

    if (!isValid) {
      return res.status(400).send({ msg: "Email or password incorrect" });
    }

    const token = jwt.sign({ user }, "MY_SECRET_KEY", { expiresIn: "1h" });

    return res.status(200).send({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.id;
    const deleteOneUser = await UserModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, deleteOneUser });
    console.log("delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

//  Update user info
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updateUserId = req.params.id;
    const { email, password } = req.body;
    const updateOneUser = await UserModel.findByIdAndUpdate(updateUserId, {
      email: email,
      password: password,
    });
    return res.status(200).send({ success: true, updateOneUser });
  } catch (error) {
    res.status(500).send(error);
  }
};
