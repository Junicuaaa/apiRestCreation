const express = require('express');
const router = express.Router();
const clienteSchema = require('../models/cliente.js')

module.exports = router;

router.post('/users', (req, res)=>{
    const cliente = clienteSchema(req.body);
    cliente.save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});
router.get('/users', (req, res)=>{
    clienteSchema
        .find({})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});
router.get('/users/:id', (req, res)=>{
    const { id } = req.params;
    clienteSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});
router.delete('/users/:id', (req, res)=>{
    const { id } = req.params;
    clienteSchema
        .findByIdAndRemove(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});
router.get('/users/name/:name', (req, res)=>{
    const { name } = req.params;
    clienteSchema
    .find({ name: { $regex: name, $options: 'i' } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})