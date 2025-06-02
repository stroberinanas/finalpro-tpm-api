import { Pos, Basecamp } from '../model/RelationModel.js';

const dataPos = await Pos.findAll({
    include: [{ model: Basecamp }],
});

export async function getPos(req, res) {
    try {
        const pos = await Pos.findAll({
            include: [{
                model: Basecamp,
                attributes: ['name'],
            }],
        });
        res.json(pos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch positions' });
    }

}
export async function getPosById(req, res) {
    try {
        const pos = await Pos.findByPk(req.params.id);
        if (!pos) return res.status(404).json({ message: "Pos Has No Data" });
        res.status(200).json(pos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

