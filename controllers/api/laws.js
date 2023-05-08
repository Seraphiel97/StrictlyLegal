const Appointment = require('../../models/appointment')
const User = require('../../models/user')

module.exports = {
    createLaw,
}

async function createLaw(req, res) {
    try {
        const law = await LawDetail.create(req.body);
        await law.save();
        res.json(law)
    } catch(err) {
        res.status(err).json(err)
    }
}