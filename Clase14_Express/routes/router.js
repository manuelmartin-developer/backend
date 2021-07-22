const router = require('express').Router();
const pages = require('../controllers/pages');



    router.get('/', pages.home);
    router.get('/about', pages.about);
    router.get('/contact', pages.contact);
    router.get('/pictures/:id', pages.pictures);
    


module.exports = router;