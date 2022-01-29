import * as express from "express";
import logger from "./logger";
import errorHandling from "./middlewares/error";
import Routes from "./routes";

const server = express();

server.use(express.json());
server.set('logger', logger);
server.use("/api/v1", Routes);
server.use(errorHandling);

export default server;
