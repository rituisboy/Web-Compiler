"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCode = exports.saveCode = void 0;
const Code_1 = require("../models/Code");
const saveCode = async (req, res) => {
    const { fullCode } = req.body;
    try {
        const newCode = await Code_1.Code.create({
            fullCode,
        });
        return res.status(201).send({ url: newCode._id, status: "saved!" });
    }
    catch (error) {
        res.status(500);
    }
};
exports.saveCode = saveCode;
const loadCode = async (req, res) => {
    const { urlId } = req.body;
    console.log(urlId);
    try {
        const exisitingCode = await Code_1.Code.findById(urlId);
        res.send({ fullCode: exisitingCode?.fullCode });
        console.log(exisitingCode?.fullCode);
    }
    catch (error) {
        res.status(500).send({ message: 'error loading code' });
    }
};
exports.loadCode = loadCode;
