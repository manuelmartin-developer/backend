const pages = {

    home: (req, res) => {
        let msj = "Esta es la Home desde Pug";
        let title = "Home";
        res.status(200).render('template', {msj, title}); // home.pug
    },
    about: (req, res) => {
        let msj = "Esto es about desde Pug";
        let title = "About";
        res.status(200).render('template', {msj, title})
    },
    contact: (req, res) => {
        let msj = "Esta es contact desde Pug";
        let title = "Contact";
        res.status(200).render('template', {msj, title})
    },
    pictures: (req, res) => { // con :id insertamos un parametro variable en la petición
        console.log(req.params); // Con esto controlamos los parametros que nos llega en la petición

        let id = req.params.id;
        let msj = "Esto es pictures y recogemos con id " + id;

        res.status(200).render('pictures', {msj, id});

    }
   
};

module.exports = pages;