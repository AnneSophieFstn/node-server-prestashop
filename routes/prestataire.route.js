import { getAllPrestataire, getOnePrestataire, getPrestatairesByServices } from "../controller/prestataire.controller.js";
import express from "express";

const PrestatairesRoutes = express.Router();

PrestatairesRoutes.get("/prestataires", getAllPrestataire);
PrestatairesRoutes.get("/prestataires/:id", getOnePrestataire);
PrestatairesRoutes.get("/prestataires/services/:serviceId", getPrestatairesByServices);

export default PrestatairesRoutes;