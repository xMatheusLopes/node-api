import express = require("express");

interface IExtraData {
    type: string;
    url?: string;
}

const sendResponse = (req: express.Request, res: express.Response, data: unknown, statusCode?: number, logUrl: boolean = true) => {
    const logger = res.app.get('logger');
    const extraData: IExtraData = { type: 'response'};
    if (logUrl) extraData.url = req.url;
    logger.log(JSON.stringify(data), extraData);
    statusCode ? res.status(statusCode).send(data) : res.send(data);
}

export default sendResponse;