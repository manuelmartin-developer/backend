const router = require('express').Router();
const entries = require('../controllers/entries')

//Endpoints
//GET
router.get('/entries', entries.getEntries)
// POST
router.post('/entries',entries.createEntry)
// PUT

// DELETE
// para el alumno...

module.exports = router