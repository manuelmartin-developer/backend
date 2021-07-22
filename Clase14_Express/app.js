const express = require('express');
const router = require('./routes/router');

const app = express();
const port = 3001;

//Motor de vistas
app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', router);// Con esto aplicamos la / para todas las rutas
app.use('/api', router);// Con esto aplicamos la / para todas las rutas
app.use('/otracosa', router);// Con esto aplicamos la / para todas las rutas

app.get('*',  (req, res) => {
  res.status(404).send('Sorry, 404 no tá!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})