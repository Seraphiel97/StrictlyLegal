const Law = require('../../models/law')

module.exports = {
    createLaw,
    getAllLaws,
    deleteLaw,
    updateLaw,
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
        const laws = await Law.find({}).populate('category').populate('state')
        res.json(laws)
    } catch(err) {
        res.status(err).json(err)
    }
}

async function deleteLaw(req, res) {
    try {
        await Law.deleteOne({id: req.body._id}) 
    } catch (err) {
        res.status(err).json(err)
    }
}

async function updateLaw(req, res) {
    try {
        const id = req.body.update.id.id
        const law = await Law.findByIdAndUpdate(id, {
            question: req.body.update.question,
            answer: req.body.update.answer,
            penalty: req.body.update.penalty,
            reference: req.body.update.reference,
            verification: req.body.update.verification,
        })
        res.json(law)
    } catch (err){
        res.status(err).json(err)
    }
}