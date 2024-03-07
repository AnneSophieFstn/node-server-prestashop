import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

async function getUserNotActivated(req, res) {
  try {
    const getUsers = await UserModel.findAll({where: { activated: 0 }})

    if(getUsers.length === 0) {
      return res.status(200).json({ message: "Aucune demande d'inscription à validé."})
    }
    return res.status(200).json(getUsers);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function createUser(req, res) {
  try {
    const saltRounds = 10;
    const addUser = await UserModel.create({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, saltRounds),
      role: req.body.role
    });

    console.log(addUser);

    return res.status(200).json({ message: "Utilisateur ajouté avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export { createUser, getUserNotActivated };