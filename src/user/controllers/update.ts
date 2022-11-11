import { Request, Response } from "express";
import { StatusCode } from "../../utils/status.code";
import { UserModel } from "../models/user.model";

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(StatusCode.OK).json(updatedUser);
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).json(error);
  }
};
