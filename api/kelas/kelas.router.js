const express=require('express');
const router=express.Router();
const{
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete
    } = require('./kelas.controller');


//routes
router.get('/',controllerGetAll);
router.get('/:id_kelas', controllerGetId);
router.post('/', controllerAdd);
router.put('/', controllerEdit);
router.delete('/',controllerDelete);
module.exports = router;