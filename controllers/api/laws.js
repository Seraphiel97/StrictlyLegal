const Law = require('../../models/law')
const State = require('../../models/state')
const Category = require('../../models/category')
const openai = require('../../config/gpt')

module.exports = {
    createLaw,
    getAllLaws,
    deleteLaw,
    updateLaw,
    getResponse,
    getFilteredLaws,
    filterLaws,
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

// retrieves all laws in the database and populates referenced data within
async function getAllLaws(req, res) {
    try {
        const laws = await Law.find({}).populate('category').populate('state')
        res.json(laws)
    } catch(err) {
        res.status(400).json(err)
    }
}

// retrieves the laws that have been verified by an administrator
async function getFilteredLaws(req, res) {
    try {
        const laws = await Law.find({verification: true})
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

// API call to OpenAi
async function getResponse(req, res) {
    try {
        // finds the specific law in the database and populates the state data for use in the prompt
        const law = await Law.findOne({_id: req.body.fields.law}).populate('state')
        // sets the keywords used in the prompt
        const query = req.body.fields.query
        // provides ideological context for the prompt
        const ideology = req.body.fields.ideology
        
        // API call using the information above from the client
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Write a 75 word maximum US ${ideology} opinion on ${law.question} and ${law.answer} in ${law.state.name} with the following concepts: ${query}`,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })

        // accesses the property relevant to the client from the response object
        const text = response.data.choices[0].text
        // trims the unnecessary comma and space from the beginning of the response
        const finalResponse = text.replace(/[, ]+/g, " ").trim()
        res.json(finalResponse)

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message, stack: error.stack });
    }
}

// Functionality is a work-in-progress
async function filterLaws(req, res) {
    try {
        console.log(req.body)
        res.json(req.body)
    } catch(err) {
        res.status(500).json(err)
    }
}