import express from "express";

import { authentification, userLog } from "../middleware/auth.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/login", authentification);

export default AuthRoutes;
