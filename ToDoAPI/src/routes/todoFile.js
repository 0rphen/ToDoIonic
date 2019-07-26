const { Router } = require('express');
const router = Router();

const todo = require('./todo.json');

router.get('/', (req, res) =>{
    res.json(todo);
});

router.post('/', (req, res) =>{
    const {id, usuario, correo, cedula} = req.body;
    const item ={...req.body};
    todo.push(item);
    res.json(todo);
});

module.exports = router;
