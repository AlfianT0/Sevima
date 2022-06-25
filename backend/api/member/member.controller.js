const models = require("../../models/index");
const member = models.member;
const md5 = require('md5');
const jwt = require('jsonwebtoken');


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
        const param = { id_member: req.params.id_member}
        member.findOne({where:param})
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
            id_member : req.body.id_member,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_tlp : req.body.no_tlp,
        }
        member.create(data)
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
        const param = { id_member: req.body.id_member}
        const data = {
            id_member : req.body.id_member,
            id_kelas : req.body.id_kelas,
            alamat : req.body.alamat,
            no_tlp : req.body.no_tlp,
        }
        member.update(data , {where: param})
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
        const param = { id_member: req.body.id_member}
        member.destroy({where: param})
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