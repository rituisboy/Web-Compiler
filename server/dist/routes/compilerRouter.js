"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerRouter = void 0;
const express_1 = require("express");
const compilerController_1 = require("../controllers/compilerController");
exports.compilerRouter = (0, express_1.Router)();
exports.compilerRouter.post("/save", compilerController_1.saveCode);
exports.compilerRouter.post("/load", compilerController_1.loadCode);
