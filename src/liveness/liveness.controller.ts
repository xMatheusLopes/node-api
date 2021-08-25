import * as express from "express";

class LivenessController {
  liveness(request: express.Request, response: express.Response) {
    response.send({status: 'ok'});
  }
}

export default LivenessController;