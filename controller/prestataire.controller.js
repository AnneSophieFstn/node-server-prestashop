import PrestataireModel from "../model/prestataire.model.js";
import User from "../model/user.model.js";

PrestataireModel.belongsTo(User);

async function createPrestataire(req, res) {
  try {
    const createPrestataire = await PrestataireModel.create({
      userId: req.body.userId,
    });
    console.log("createPrestataire: ", createPrestataire);

    return res.status(200).json({ message: "Prestataire ajouté avec succès" });
  } catch (error) {
    console.log(error);
  }
}

async function editPrestataire(req, res) {
  try {
    const editPrestataire = await PrestataireModel.update(
      {
        name: req.body.data.name,
        phone: req.body.data.phone,
        city: req.body.data.city,
        description: req.body.data.description,
        serviceId: req.body.data.serviceId,
        userId: req.params.id,
      },
      {
        where: { userId: req.params.id },
      }
    );
    console.log("editPrestataire: ", editPrestataire);

    return res.status(200).json({ message: "Prestataire modifié avec succès" });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function getAllPrestataire(req, res) {
  try {
    const prestataires = await PrestataireModel.findAll();
    return res.status(200).json(prestataires);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function getOnePrestataire(req, res) {
  try {
    const prestataire = await PrestataireModel.findOne({
      attributes: [
        "id",
        "name",
        "phone",
        "city",
        "description",
        "serviceId",
        "userId",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "email"],
        },
      ],
      where: { id: req.params.id },
    });

    if (!prestataire) {
      return res.status(404).json({ message: "Ce prestataire n'existe pas" });
    }

    return res.status(200).json(prestataire);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function getDataPrestataireLog(req, res) {
  try {
    const prestataire = await PrestataireModel.findOne({
      where: { userId: req.params.userId },
    });

    if (!prestataire) {
      return res.status(404).json({ message: "Ce prestataire n'existe pas" });
    }
    return res.status(200).json(prestataire);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
}

async function getPrestatairesByServices(req, res) {
  try {
    const prestataireByServiceId = await PrestataireModel.findAll({
      where: {
        serviceId: req.params.serviceId,
      },
    });
    console.log(prestataireByServiceId);
    if (!prestataireByServiceId) {
      return res
        .status(404)
        .json({ message: "Aucun prestataire ne propose ce service !" });
    }
    return res.status(200).json(prestataireByServiceId);
  } catch (error) {
    console.error("ERROR: ", error);
  }
}

export {
  createPrestataire,
  editPrestataire,
  getAllPrestataire,
  getOnePrestataire,
  getDataPrestataireLog,
  getPrestatairesByServices,
};
