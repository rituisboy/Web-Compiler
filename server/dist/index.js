"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const dbConnect_1 = require("./lib/dbConnect");
const compilerRouter_1 = require("./routes/compilerRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, dotenv_1.config)();
(0, dbConnect_1.dbConnect)();
app.use("/compiler", compilerRouter_1.compilerRouter);
app.get("/", (req, res) => {
    // res.send(process.env.MONGO_URI);
    res.send('home');
});
app.listen(4000, () => {
    console.log("http://localhost:4000");
});
