const models = require("../../models/index");
const guru = models.guru;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const guru = require("../../models/guru");


module.exports={
    controllerGetAll:(req,res)=>{
        member.findAll()
        .then(result=>{
            res.json({
                sucess:1,
                data:result
            })
        })
    },
    controllerGetId:(req,res)=>{
        const param = { id_guru: req.params.id_guru}
        guru.findOne({where:param})
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
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            id_mata_pelajaran : req.body.id_mata_pelajaran,
            no_tlp : req.body.no_tlp
        }
        guru.create(data)
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
        const param = { id_guru: req.body.id_guru}
        const data = {
            id_guru : req.body.id_guru,
            nama : req.body.nama,
            id_kelas : req.body.id_kelas,
            id_mata_pelajaran : req.body.id_mata_pelajaran,
            no_tlp : req.body.no_tlp
        }
        guru.update(data , {where: param})
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
        const param = { id_guru: req.body.id_guru}
        guru.destroy({where: param})
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