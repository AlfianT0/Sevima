const models = require("../../models/index");
const mata_pelajaran = models.mata_pelajaran;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const mata_pelajaran = require("../../models/mata_pelajaran");


module.exports={
    controllerGetAll:(req,res)=>{
        mata_pelajaran.findAll()
        .then(result=>{
            res.json({
                sucess:1,
                data:result
            })
        })
    },
    controllerGetId:(req,res)=>{
        const param = { id_mata_pelajaran: req.params.id_mata_pelajaran}
        mata_pelajaran.findOne({where:param})
        .then(result => {
            res.json({
                success : 1,
                data : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerAdd:(req,res)=>{
        const data = {
            nama : req.body.nama
        }
        mata_pelajaran.create(data)
        .then(result => {
            res.json({
                success : 1,
                data : result,data
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerEdit:(req,res)=>{
        const param = { id_mata_pelajaran: req.body.id_mata_pelajaran}
        const data = {
            id_mata_pelajaran: req.body.id_mata_pelajaran,
            nama : req.body.nama
        }
        mata_pelajaran.update(data , {where: param})
        .then(result => {
            res.json({
                success : 1,
                data : result,data
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerDelete: (req,res)=>{
        const param = { id_mata_pelajaran: req.body.id_mata_pelajaran}
        mata_pelajaran.destroy({where: param})
        .then(result => {
            res.json({
                success : 1,
                data : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    }
}