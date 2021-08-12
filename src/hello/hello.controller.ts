import express from "express";
import fs from "fs";

import { schema } from "./hello.schemas";

export default {
  hello(request: express.Request, response: express.Response) {
    response.send("Hello World 3");
  },

  store(request: express.Request, response: express.Response) {
    const base64 = request.body.img.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("image.png", base64, { encoding: "base64" }, function (err) {
      console.log("File created");
    });
    response.send("ok");
  },

  validate(request: express.Request, response: express.Response) {
    response.send(schema.parse(request.body));
  },
};
