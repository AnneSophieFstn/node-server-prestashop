import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

async function getAllUsers(req, res) {
  try {
    const getAllUsers = await UserModel.findAll({
      where: { activated: 1, role: "Prestataire" },
    });

    if (getAllUsers.length === 0) {
      return res.status(200).json({ message: "Aucun utilisateur inscrit." });
    }
    return res.status(200).json(getAllUsers);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}
async function getUserNotActivated(req, res) {
  try {
    const getUserNotActivated = await UserModel.findAll({
      where: { activated: 0 },
    });

    if (getUserNotActivated.length === 0) {
      return res
        .status(200)
        .json({ message: "Aucune demande d'inscription à validé." });
    }
    return res.status(200).json(getUserNotActivated);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const deleteUser = await UserModel.destroy({
      where: { id: req.params.id },
    });

    if (!deleteUser) {
      res.status(400).json({ message: "Cet utilisateur n'existe pas" });
    }

    return res.status(200).json({ message: "Le match à bien été supprimé" });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function validateAccount(req, res) {
  try {
    const validateAccount = await UserModel.update(
      {
        activated: 1,
      },
      {
        where: { id: req.params.id },
      }
    );

    if (!validateAccount) {
      res.status(400).json({ message: "Ce compte n'existe pas" });
    }

    return res.status(200).json({
      message: "L'utilisateur a bien été mis à jour..",
    });
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
      role: req.body.role,
      activated: req.body.activated,
    });

    console.log(addUser);

    return res.status(200).json({ message: "Utilisateur ajouté avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

export {
  createUser,
  getUserNotActivated,
  validateAccount,
  getAllUsers,
  deleteUser,
};
