import express from "express";
import hello from "./hello.controller";

const router = express.Router();
router.route("/hello").get(hello.hello).post(hello.store);

export default router;
