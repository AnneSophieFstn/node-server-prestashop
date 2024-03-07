import ServiceModel from "../model/service.model.js"

async function getAllServices(req, res) {
    try {
        const services = await ServiceModel.findAll();
        return res.status(200).json(services);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

async function getOneService(req, res) {
    try {
        const service = await ServiceModel.findByPk(req.params.id);

        if (!service) {
            return res.status(404).json({ message: "Ce service n'existe pas" });
        }
        return res.status(200).json(service);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export {getAllServices, getOneService}