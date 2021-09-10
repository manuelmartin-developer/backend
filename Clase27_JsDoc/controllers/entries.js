const Entry = require('../models/entries')

/**
 * Rutas a utilizar 
 * @author Manuel Martín <manuelmartin.name> 
 * @exports entries 
 * @namespace entries 
 */
const entries = {
    /**
  * Función getEntries busca las entradas en la BD
  * @memberof entries 
  * @method getEntries 
  * @async 
  * @param {Object} req - Request
  * @param {Object} res - Response
  * @return {json} 
  * @throws {error} 
  */
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
    /**
  * Función addEntries agrega un registro a la BD
  * @memberof entries 
  * @method createEntries 
  * @async 
  * @param {Object} req - Request
  * @param {Object} res - Response
  * @return {json} 
  * @throws {error} 
  */
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