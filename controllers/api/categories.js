const Category = require('../../models/category')

module.exports = {
    getAll,
}

async function getAll(req, res) {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch (err) {
        res.status(err).json(err)
    }
}