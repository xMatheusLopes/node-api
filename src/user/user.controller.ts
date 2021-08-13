import * as express from "express";
import * as fs from "fs";

import { createConnection } from "typeorm";
import { User } from "../entity/User";

export default {
  async store(request: express.Request, response: express.Response) {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    await userRepository.save(request.body);
    response.send("ok");
  },
};
