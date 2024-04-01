import { Request, Response } from "express";
import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({
      fullCode,
    });
    return res.status(201).send({ url: newCode._id, status: "saved!" });
  } catch (error) {
    res.status(500);
  }
};
export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  console.log(urlId);
  try {
    const exisitingCode = await Code.findById(urlId);
    res.send({ fullCode: exisitingCode?.fullCode });
    console.log(exisitingCode?.fullCode);
  } catch (error) {
    res.status(500).send({ message: "error loading code" });
  }
};
