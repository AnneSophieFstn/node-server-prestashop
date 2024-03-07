import express from "express";
import {
  createUser,
  getUserNotActivated,
} from "../controller/user.controller.js";

const UserRoutes = express.Router();

UserRoutes.post("/register", createUser);
UserRoutes.get("/users-not-activated", getUserNotActivated);

export default UserRoutes;
