import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");
import { sequelize } from "./config/db";
import authRoute from "./routes/auth";
import bookRoute from "./routes/book";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://akkewacheiei:pLl6OCIG91wmWSNK@cluster0.zcamrnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongoose connection successfully!"))
  .catch((err: object) => console.log(err));

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Use routes
app.use(authRoute);
app.use(bookRoute);

app.listen(port, async () => {
  //await sequelize.sync({ force: true });
  await sequelize.sync();

  console.log(`[server]: Server is running at http://localhost:${port}`);
});
