import PrestataireModel from "../model/prestataire.model.js";

async function editPrestataire(req, res) {
    try {
        const createPresta = await PrestataireModel.create({
            name: req.query.name,
            phone: req.query.phone,
            city: req.query.city,
            description: req.query.description,
            serviceId: req.query.serviceId,
        });

        console.log(createPresta);
        return res.status(200).json({ message: "Prestataire ajouté avec succès" });
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
        const prestataire = await PrestataireModel.findByPk(req.params.id);

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
        const prestataireByServiceId = await PrestataireModel.findAll(
            {
                where: {
                    serviceId: req.params.serviceId
                }
            }
        )
        console.log(prestataireByServiceId)
        if (!prestataireByServiceId) {
            return res.status(404).json({ message: "Aucun prestataire ne propose ce service !" });
        }
        return res.status(200).json(prestataireByServiceId);

    } catch (error) {
        console.error("ERROR: ", error)
    }
}

export { editPrestataire, getAllPrestataire, getOnePrestataire, getPrestatairesByServices };