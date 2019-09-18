//importamos/requerimos express y controladores
const express = require('express');
// const pokemonsRouter = require('./routes/pokemon-controller');
const indexRouter = require('./routes/index-controller.js');
const publicacionRouter = require('./routes/publicacion-controller.js');
const comentarioRouter = require('./routes/comentario-controller.js');
const likesRouter = require('./routes/likes-controller.js');
//instanciamos nueva aplicación express
const app = express();
const logger = require('morgan');
const cors = require('cors');
app.use("/img", express.static('uploads'));
app.use(logger('dev')); //muestra en consola las peticiones Get, Post... recibidas


app.use(cors());
//necesario para poder recibir datos en json
app.use(express.json());
//las ruta "/" se gestiona en indexRouter
app.use('/', indexRouter);
//las rutas que empiecen por /api/pokemons se dirigirán a pokemonsRouter
app.use('/api/publicacion', publicacionRouter);
app.use('/api/comentario', comentarioRouter);
app.use('/api/likes', likesRouter);
//arranque del servidor
const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))