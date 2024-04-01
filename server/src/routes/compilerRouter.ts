import express, { Router } from "express";
import { saveCode, loadCode } from "../controllers/compilerController";

export const compilerRouter = Router();

compilerRouter.post("/save", saveCode);
compilerRouter.post("/load", loadCode);

