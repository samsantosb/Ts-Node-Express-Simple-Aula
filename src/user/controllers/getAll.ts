import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    return res.status(StatusCode.OK).json(users);
  } catch (error) {
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
