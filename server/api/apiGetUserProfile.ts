import { Request, Response } from "express";

export function apiGetUserProfile(req: Request, res: Response) {
  res.status(200).send("You are Authorized!");
}
