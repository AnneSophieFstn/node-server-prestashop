import express from "express";

import { authentification } from "../middleware/auth.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/login", authentification);

export default AuthRoutes;
