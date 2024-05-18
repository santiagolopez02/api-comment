import "module-alias/register";
import express, { Express } from "express";
import http from "http";
import bodyParser from "body-parser";

import commentRouter from "@/infrastructure/routes/index";

const app: Express = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", commentRouter);

const server = http.createServer(app);

server.on("listening", () => {
  console.log(`Server is running on port at ${port}`);
});

server.listen(port);
