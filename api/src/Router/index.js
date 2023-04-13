const { Router } = require('express');
const router = Router();

const Prueba = require('./Prueba.js');

router.use('/prueba', Prueba);





module.exports = router