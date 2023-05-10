const Law = require('../../models/law')
const Category = require('../../models/category')
const State = require('../../models/state')
const User = require('../../models/user')
const openai = require('../../config/gpt')

module.exports = {
    createLaw,
    getAllLaws,
    deleteLaw,
    updateLaw,
    getResponse,
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
        res.status(500).json(err)
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
        res.status(500).json(err)
    }
}

async function getResponse(req, res) {
    console.log(req.body)
    try {
        const category = await Category.find({id: req.body.fields.category})
        const state = await State.find({id: req.body.fields.state})
        const query = req.body.fields.query

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `In ${state.name} and regarding ${category.name} law, ${query}?`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ["\n"],
        })

        const newLaw = new Law({
            user: req.body.fields.user,
            category: req.body.fields.category,
            state: req.body.fields.state,
            question: query,
            answer: response,
            penalty: '',
            reference: '',
            verification: false,
        })

        newLaw.save()

        res.json(response)

    } catch (err) {
        res.status(500).json(err)
    }
}