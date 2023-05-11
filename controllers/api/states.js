const State = require('../../models/state')

module.exports = {
    getAllStates,
}

async function getAllStates(req, res) {
    try {
        const states = await State.find({})
        res.json(states)
    } catch (err) {
        res.status(err).json(err)
    }
}