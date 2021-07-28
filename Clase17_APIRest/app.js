const express = require('express');
const router = require('./routes/router');
const products = require('./routes/products');


const app = express();
const port = 3001;

// const hasAPIKey = (req, res, next) => {
//   const APIKey = req.query.key;

//   if(APIKey && APIKey === "123hola"){
//     next();
//   }else{
//     res.status(403).send("Sin APIKey no hay fiesta!");
//   };
// };

//Motor de vistas
app.set('view engine', 'pug');
app.set('views','./views');

//Middlewares
// app.use(hasAPIKey);// Para comprobar si la peticion tiene APIKey - http://localhost:3001/products/?key=123hola
app.use(express.json());// Para convertir a json

//Rutas
app.use('/', router);// Para las vistas de la web// Con esto aplicamos la / para todas las rutas
app.use('/api', products);// Para la API// Con esto aplicamos la / para todas las rutas

app.get('*',  (req, res) => {
  res.status(404).send('Sorry, 404 no tá!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})