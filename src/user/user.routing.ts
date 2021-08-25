import * as express from "express";
import UserController from './user.controller'

const router = express.Router();

const userController = new UserController();
router.route("/user").post(userController.store).get(userController.listAll);

export default router;
