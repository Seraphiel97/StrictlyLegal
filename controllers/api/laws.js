const Law = require('../../models/law')
const State = require('../../models/state')
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
        const item = await Law.findOneAndDelete({_id: req.body._id}) 
        res.json(item)
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
        const law = await Law.findOne({_id: req.body.fields.law}).populate('state')
        const query = req.body.fields.query
        const ideology = req.body.fields.ideology
        console.log(law)
        
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Write a 75 word maximum US ${ideology} opinion on ${law.question} and ${law.answer} in ${law.state.name} with the following concepts: ${query}`,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })

        const text = response.data.choices[0].text
        const finalResponse = text.replace(/[, ]+/g, " ").trim()
        res.json(finalResponse)

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message, stack: error.stack });
    }
}