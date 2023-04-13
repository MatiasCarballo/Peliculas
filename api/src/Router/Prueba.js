const { Router } = require('express');
const router = Router();
const Prueba = require('../Model/Prueba.js')

router.get('/', async(req,res)=>{
        try{
            const prueba = await Prueba.find();
            res.status(200).json(prueba);
        }
        catch(err){
            console.log(err);
            res.status(400).send('err en preba');
        }
});

router.post('/', async(req, res)=>{
    const {string, number, boolean} = req.body;
    try {
        const pruebas = await Prueba.create({string, number, boolean});
        res.status(200).json(pruebas);
    } catch (err){
        console.log(err);
        res.status(400).send('err en post pruebas');
    }
});

router.put('/:id', async(req,res)=>{
    const { id } = req.params
    const { string, number, boolean } = req.body

    try {
        const prueba = await Prueba.findByIdAndUpdate(id,
            {
                $set:{string, number, boolean}
            });
        res.status(200).json(prueba);
    } catch (err){
        console.log(err);
        res.status(400).send('err en put pruebas')        
    }
});

router.delete('/:id', async(req,res)=>{
    const {id} = req.params

    try {
        const prueba = await Prueba.findByIdAndDelete(id)
        res.status(200).json(prueba);
    } catch (err) {
        console.log(err);
        res.status(400).send('err en delete pruebas');
    }
})

module.exports = router