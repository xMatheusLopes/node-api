import express = require("express");
import sendResponse from "./response";

const errorHandling = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const logger = req.app.get('logger');
    logger.log(err.stack, { type: 'error' });
    sendResponse(req, res, err.message, 500, false);
}

export default errorHandling;