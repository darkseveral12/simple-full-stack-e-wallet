import { Router } from "express";
import type { Request, Response } from "express";
import { UserDetails } from "../types";
const authRouter = Router();

authRouter.post("/signup", (request: Request, response: Response) => {
  const { firstName, lastName, email, password }: UserDetails = request.body;

  try {
    if (!firstName || !lastName || !email || !password)
      throw new Error("The field must not be empty");
  } catch (err) {
    if (err instanceof Error)
      response.status(404).json({
        message: err,
      });
    else
      response.status(404).json({
        message: "Something error has occured",
      });
  }
});

module.exports = authRouter;
