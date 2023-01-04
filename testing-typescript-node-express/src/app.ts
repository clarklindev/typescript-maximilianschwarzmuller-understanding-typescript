// const express = require("express"); //commonjs
import express, { Request, Response, NextFunction } from "express"; //es modules
import { json } from "body-parser"; //parse all body of incoming requests that is json - and add it to req.body

import todoRoutes from "./routes/todos";

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

//middlewares
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

app.listen(3000);
