import * as express from "express";
import LivenessController from './liveness.controller'

const router = express.Router();

const livenessController = new LivenessController();
router.route("/health/liveness").get(livenessController.liveness);

export default router;
