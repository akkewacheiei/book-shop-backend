import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import BookDetail from "../models/book_detail";

router.post("/");

router.post("/book_detail", async (req, res, next) => {
    console.log("book_detail!!!");
    console.log("req.body:", req.body);
    
  try {
    const post = await BookDetail.create(req.body);
    res.json(post);
  } catch (error) {
    console.log("err:", error);
  }
});

export default router;

