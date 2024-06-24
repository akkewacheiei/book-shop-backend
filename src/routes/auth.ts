import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import Customer from "../models/customer";

router.post("/customer", async (req: Request, res: Response) => {
  const { name, email, address, phone_number } = req.body;

  try {
    await Customer.create({ name, email, address, phone_number });
    res.json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "fail", error: error });
  }
});

export default router;
