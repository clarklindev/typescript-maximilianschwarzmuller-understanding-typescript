"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express"); //commonjs
const express_1 = __importDefault(require("express")); //es modules
const body_parser_1 = require("body-parser"); //parse all body of incoming requests that is json - and add it to req.body
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/todos", todos_1.default);
//middlewares
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
app.listen(3000);
