const Category = require('../../models/category')

module.exports = {
    getAllCategories,
}

// used to retrieve all categories for drop-down menus
async function getAllCategories(req, res) {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch (err) {
        res.status(err).json(err)
    }
}