import Basecamp from "../model/BasecampModel.js";

export async function getBasecamp(req, res) {
    try {
        const basecamp = await Basecamp.findAll();
        res.status(200).json(basecamp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export async function getBasecampById(req, res) {
    try {
        const basecamp = await Basecamp.findByPk(req.params.id);
        if (!basecamp) return res.status(404).json({ message: "Basecamp Has No Data" });
        res.status(200).json(basecamp);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}