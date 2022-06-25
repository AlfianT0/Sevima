const express=require('express');
const router=express.Router();
const{
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete
    } = require('./tugas.controller');



router.get('/',controllerGetAll);
router.get('/:id_tugas', controllerGetId);
router.post('/', controllerAdd);
router.put('/', controllerEdit);
router.delete('/',controllerDelete);
module.exports = router;