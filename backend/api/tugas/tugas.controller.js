const models = require("../../models/index");
const tugas = models.tugas;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const tugas = require("../../models/tugas");


module.exports={
    controllerGetAll:async(req,res)=>{
        tugas.findAll()
        .then(result=>{
            res.json({
                sucess:1,
                data:result
            })
        })
    },
    controllerGetIdonly:async(req,res)=>{
        const param = { id_tugas: req.params.id_tugas}
        tugas.findOne({where:param})
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
    controllerGetId:async(req,res)=>{
        const param = { id_tugas: req.params.id_tugas}
        tugas.findAll({where:param})
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
    controllerAdd:async(req,res)=>{
        const data = {
            id_guru: req.body.id_guru,
            id_kelas: req.body.id_kelas,
            id_mata_pelajaran: req.body.id_mata_pelajaran,
            nama: req.body.nama
        }
        tugas.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted",
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
    controllerEdit:async(req,res)=>{
        const param = { id_tugas: req.body.id_tugas}
        const data = {
            id_tugas: req.body.id_tugas,
            id_guru: req.body.id_guru,
            id_kelas: req.body.id_kelas,
            id_mata_pelajaran: req.body.id_mata_pelajaran,
            nama: req.body.nama
        }
        tugas.update(data , {where: param})
        .then(result => {
            res.json({
                message: "data has been update",
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
    controllerDelete: async (req,res)=>{
        const param = { id_tugas: req.params.id_tugas}
        tugas.destroy({where: param})
        .then(result => {
            res.json({
                message : "data has been destroyed",
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