const express=require('express');
const router=express.Router();
const{
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete
    } = require('./mata_pelajaran.controller');


//routes
router.get('/',controllerGetAll);
router.get('/:id_mata_pelajaran', controllerGetId);
router.post('/', controllerAdd);
router.put('/', controllerEdit);
router.delete('/',controllerDelete);
module.exports = router;