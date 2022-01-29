import * as express from "express";
import user from "./user/user.routing";
import liveness from "./liveness/liveness.routing";
import request from "./middlewares/request";

const router = express.Router();
router.use(request);
router.use(user);
router.use(liveness);

export default router;
