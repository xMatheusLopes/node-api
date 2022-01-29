import * as express from "express";

import { createConnection } from "typeorm";
import { User } from "../entity/User";
import sendResponse from "../middlewares/response";

class UserController {
  async store(request: express.Request, response: express.Response, next: express.NextFunction) {
    // const connection = await createConnection();
    // const userRepository = connection.getRepository(User);
    // const user = await userRepository.save(request.body);
    // connection.close();
    // response.send(user);
    // try {
    //   throw new Error("Hello error!")
    // }
    // catch (error) {
    //     next(error)
    // }
    sendResponse(request, response, {id: 1, name: "Matheus"});
  }

  async listAll(request: express.Request, response: express.Response, next: express.NextFunction) {
    // const connection = await createConnection();
    // const userRepository = connection.getRepository(User);
    // const users = await userRepository.find();
    // connection.close();
    // response.send(users);
    // try {
    //   throw new Error("Hello error!")
    // }
    // catch (error) {
    //     next(error)
    // }
    sendResponse(request, response, [{id: 1, name: "Matheus"}]);
  }
}

export default UserController;