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

    console.log("---------------------------")
    model.publicacion.findAll()
        .then(lista => res.json({ ok: true, data: lista }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.get('/:id', (req, res, next) => {
    let idpublicacion = req.params.id;
    // modelo.Genero.findById(idgenero)
    model.publicacion.findOne({ where: { idPublicacion: idpublicacion } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


router.put('/:id', (req, res, next) => {
    let idpublicacion = req.params.id;
    // modelo.Genero.findById(idgenero)
    model.publicacion.findOne({ where: { idPublicacion: idpublicacion } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    model.publicacion.create(req.body)
    .then(elemento => res.json({ ok: true, data: elemento }))
    .catch(err => res.json({ ok: false, error: err }));
});


router.delete('/:id', (req, res, next) => {
    let idpublicacion = req.params.id;
    model.publicacion.destroy({ where: { idPublicacion: idpublicacion } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


    module.exports = router;