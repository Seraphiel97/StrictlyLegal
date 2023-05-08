const Law = require('../../models/law')

module.exports = {
    createLaw,
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