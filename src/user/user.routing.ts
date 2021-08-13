import * as express from "express";
import hello from "./user.controller";

const router = express.Router();
router.route("/user").post(hello.store);

export default router;