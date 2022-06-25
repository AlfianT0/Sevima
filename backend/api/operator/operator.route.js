const express=require('express');
const router=express.Router();
const{
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerAuth
    } = require('./petugas.controller');
    const authorize = require('../auth/authorize');
    const {IsPetugas, IsAdmin} = require('../auth/level');
   
//routes
router.get('/',controllerGetAll);
router.get('/:id_operator',authorize, controllerGetId);
router.post('/', controllerAdd);
router.put('/',controllerEdit);
router.delete('/', controllerDelete);
router.post('/auth',controllerAuth);
module.exports = router;
