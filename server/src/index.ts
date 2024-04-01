import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";

const app = express();
app.use(express.json());
app.use(cors());
config();
dbConnect();

app.use("/compiler", compilerRouter);
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
