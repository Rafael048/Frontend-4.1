var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")
const jwt = require('jsonwebtoken')


router.post("/register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then(()=>{
    res.send("Usuario Creado")
  })
  .catch((e)=>{
    res.status(400).json({error: "Error Al registar el usuario", message:e.message})
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
  .then(() => {
    res.status(200).json({result: "Usuario Autenticado"})
  }).catch((e) => {
    res.status(401).json({error: "Error al autenticar", message: e.message})

  });
})
router.get("/500",(req,res,next)=>{
  res.send("Ha ocurrido un fallo en tu solicitud")
})

module.exports = router;
