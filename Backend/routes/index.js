var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")
const jwt = require('jsonwebtoken');
const e = require('express');


router.post("/register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then(()=>{
    res.send("Usuario Creado")
  })
  .catch((e)=>{
    res.status(400).json({error: "Nombre de usuario ya utilizado", message:e.message})
  })
})

router.post("/login",function(req,res,next){
  console.log(req.body)
  AutenticationControllers.login(req.body)
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e)
    res.status(401).json({error: "Error al autenticar", message: e.message})
  })
})

router.get("/logout",function(req,res,next){
  res.send("Logout")
})
router.get("/verify/:token", function(req,res,next){
  const token = req.params.token
  AutenticationControllers.verify(token)
  .then((userName) => {
    res.status(200).json({result: "Usuario Autenticado",userName:userName})
  }).catch((e) => {
    res.status(401).json({error: "Error al autenticar", message: e.message})

  });
})
router.get("/500",(req,res,next)=>{
  res.send("Ha ocurrido un fallo en tu solicitud")
})
router.post("/comments",function(req,res,next){
  let comments = req.body
  AutenticationControllers.setComments(comments)
  .then((result) => {
    res.status(200).json({Comment: "Comentario Agregado", result:result})
  }).catch((e) => {
    console.error(e)
    res.status(500).json({error: "Error al agregar el comentario", message: e.message})

  });
})
router.get("/comments/:location",function(req,res,next){
  AutenticationControllers.getComments(req.params.location)
  .then((result) => {
    console.log(result)
    res.status(200).json({result: "Comentarios Cargados", data: result})
  }).catch((e) => {
    res.status(500).json({error: "Error al cargar los comentarios", message: e.message})

  });
})
module.exports = router;
