import * as express from "express";
import user from "./user/user.routing";
import liveness from "./liveness/liveness.routing";

const router = express.Router();
router.use(user);
router.use(liveness);

export default router;
