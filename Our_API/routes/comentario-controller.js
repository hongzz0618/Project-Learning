const express = require('express');
const router = express.Router();
//requerimos el index.js de models que inicializa sequelize
const model = require('../models/index.js');

router.all('/',(req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})


router.all('/:xxx', (req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
})

router.get('/', (req, res, next) => {
    model.comentario.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.get('/:id', (req, res, next) => {
    let idComentario = req.params.id;
    // modelo.Genero.findById(idgenero)
    model.comentario.findAll({ where: { Publicacion_idPublicacion: idComentario } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.get('/:id/count', (req, res, next) => {
    let idPublicacion = req.params.id;
    model.comentario.findOne({
        where: {Publicacion_idPublicacion: idPublicacion},
        attributes: [[model.Sequelize.fn('count', model.Sequelize.col('*')), 'cuantos']],
      })
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    model.comentario.create(req.body)
    .then(elemento => res.json({ ok: true, data: elemento }))
    .catch(err => res.json({ ok: false, error: err }));
});

router.put('/:id', (req, res, next) => {
    let idComentario = req.params.id;
    // modelo.Genero.findById(idgenero)
    model.comentario.findOne({ where: { idComentario: idComentario } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});



router.delete('/:id', (req, res, next) => {
    let idComentario = req.params.id;
    modelo.comentario.destroy({ where: { idComentario: idComentario } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


    module.exports = router;