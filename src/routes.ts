import * as express from "express";
import hello from "./user/user.routing";

const router = express.Router();
router.use(hello);

export default router;