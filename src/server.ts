import express from "express";
import Routes from "./routes";

const server = express();

server.use(express.json());
server.use("/api/v1", Routes);

export default server;
