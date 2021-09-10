const Entry = require('../models/entries')
const entries = {
    getEntries: async (req, res) => {
        let entries;
        console.log(req.query.email)
        try {
            req.query.email ?
                (entries = await Entry.getEntriesByAuthor(req.query.email)) :
                (entries = await Entry.getAllEntries());
            res.status(200).json({
                entries
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    createEntry: async (req, res) => {
        let data = await req.body;

        try {

            const num = await Entry.addEntry(data)
            res.status(201).json({message: "datos anadidos: "+ num})
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
};

module.exports = entries;