import express from "express";
import PrestatairesRoutes from "../routes/prestataire.route.js";
import ServicesRoutes from "../routes/service.route.js";
import UserRoutes from "../routes/user.route.js";
import cors from "cors";
import AuthRoutes from "../routes/auth.route.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json())

app.use(PrestatairesRoutes);
app.use(ServicesRoutes);
app.use(UserRoutes);
app.use(AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});