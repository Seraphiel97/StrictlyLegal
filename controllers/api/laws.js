const Law = require('../../models/law')

module.exports = {
    createLaw,
    getAllLaws,
}

async function createLaw(req, res) {
    try {
        const law = await Law.create(req.body);
        await law.save();
        res.json(law)
    } catch(err) {
        res.status(err).json(err)
    }
}

async function getAllLaws(req, res) {
    try {
        const laws = await Law.find({})
        res.json(laws)
    } catch(err) {
        res.status(err).json(err)
    }
}