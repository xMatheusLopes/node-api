import express from "express";
import hello from "./hello/hello.routing";

const router = express.Router();
router.use(hello);

export default router;
