import {
  getAllPrestataire,
  getOnePrestataire,
  getDataPrestataireLog,
  getPrestatairesByServices,
  createPrestataire,
  editPrestataire,
} from "../controller/prestataire.controller.js";
import express from "express";
import { checkRolesToken, verifyToken } from "../middleware/auth.js";

const PrestatairesRoutes = express.Router();

PrestatairesRoutes.get("/prestataires", getAllPrestataire);
PrestatairesRoutes.get("/prestataire/:id", getOnePrestataire);
PrestatairesRoutes.get("/prestataires/:userId", getDataPrestataireLog);
PrestatairesRoutes.post("/prestataires/create", createPrestataire);
PrestatairesRoutes.get(
  "/prestataires/services/:serviceId",
  getPrestatairesByServices
);
PrestatairesRoutes.put(
  "/prestataires/:id",
  editPrestataire,
  verifyToken,
  checkRolesToken(["Admin", "Prestataire"])
);

export default PrestatairesRoutes;
