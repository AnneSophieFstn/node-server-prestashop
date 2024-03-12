import express from "express";
import {
  createUser,
  getUserNotActivated,
  validateAccount,
  getAllUsers,
  deleteUser,
} from "../controller/user.controller.js";
import { checkRolesToken, userLog, verifyToken } from "../middleware/auth.js";

const UserRoutes = express.Router();

UserRoutes.get("/users", getAllUsers);
UserRoutes.get("/user", verifyToken, userLog);
UserRoutes.post("/register", createUser);
UserRoutes.get(
  "/users-not-activated",
  getUserNotActivated,
  verifyToken,
  checkRolesToken(["Admin"])
);
UserRoutes.put(
  "/validate-account/:id",
  validateAccount,
  verifyToken,
  checkRolesToken(["Admin"])
);
UserRoutes.delete(
  "/users/delete/:id",
  deleteUser,
  verifyToken,
  checkRolesToken(["Admin", "Prestataire"])
);

export default UserRoutes;
