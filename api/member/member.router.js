const express=require('express');
const router=express.Router();
const{
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete
    } = require('./member.controller');



router.get('/',controllerGetAll);
router.get('/:id_member', controllerGetId);
router.post('/', controllerAdd);
router.put('/', controllerEdit);
router.delete('/',controllerDelete);
module.exports = router;