import * as express from "express";

import { createConnection } from "typeorm";
import { User } from "../entity/User";

class UserController {
  async store(request: express.Request, response: express.Response) {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const user = await userRepository.save(request.body);
    connection.close();
    response.send(user);
  }

  async listAll(request: express.Request, response: express.Response) {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const users = await userRepository.find();
    connection.close();
    response.send(users);
  }
}

export default UserController;