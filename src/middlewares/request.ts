import express = require("express");

const request = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const logger = req.app.get('logger');
    logger.log(JSON.stringify(req.body), { url: req.url, type: 'request' });
    next();
}

export default request;