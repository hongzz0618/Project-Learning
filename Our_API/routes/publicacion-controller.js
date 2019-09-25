const express = require('express');
const router = express.Router();
//requerimos el index.js de models que inicializa sequelize
const model = require('../models/index.js');
const multer = require('multer');

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


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file');

router.get('/', (req, res, next) => {

    console.log("---------------------------")
    model.publicacionx.findAll()
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
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        
    let idpublicacion = req.params.id;
    // modelo.Genero.findById(idgenero)
    req.body.file = req.file.filename;
    model.publicacion.findOne({ where: { idPublicacion: idpublicacion } })
        .then(item => item.update(req.body))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
    })
});

// router.post('/', (req, res, next) => {
//     console.log(req.body)
//     model.publicacion.create(req.body)
//     .then(elemento => res.json({ ok: true, data: elemento }))
//     .catch(err => res.json({ ok: false, error: err }));
// });

router.post('/foto', (req, res, next) => {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        
        // console.log(req.file);

        // let idcontacto = req.body.idcontacto;
        // console.log(req.body);
        req.body.file = req.file.filename;
        console.log(req.body);
        model.publicacion.create(req.body)   
        .then(elemento => res.json({ ok: true, data: elemento }))
        .catch(err => res.json({ ok: false, error: err }));
        // if (idcontacto){
        //     modelo.Contacto.findOne({ where: { id: idcontacto } })
        //         .then(item => {
        //             item.urlfoto = req.file.filename;
        //             return item.save();
        //         })
        //         .then (() => res.status(200).send(req.file));
        // } else {
        //     return res.status(200).send(req.file);
        // }

        
    })

});
router.delete('/:id', (req, res, next) => {
    let idpublicacion = req.params.id;
    model.publicacion.destroy({ where: { idPublicacion: idpublicacion } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
});


    module.exports = router;