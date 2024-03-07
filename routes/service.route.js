import { getAllServices, getOneService } from "../controller/service.controller.js";
import express from "express";

const ServicesRoutes = express.Router();

ServicesRoutes.get("/services", getAllServices);
ServicesRoutes.get("/services/:id", getOneService);

export default ServicesRoutes;