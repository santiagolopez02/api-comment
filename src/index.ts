import "module-alias/register";
import express, { Express } from "express";
import http from "http";
import bodyParser from "body-parser";
import commentRouter from "@/infrastructure/routes/index";
import cors from "cors";

// Create an Express application
const app: Express = express();

// Define the port to listen on
let port = 8080;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", commentRouter);

// Create HTTP server with the Express app
const server = http.createServer(app);

// Listen for server events
server.on("listening", () => {
  console.log(`Server is running on port at ${port}`);
});

// Start the server
server.listen(port);

export default app;
