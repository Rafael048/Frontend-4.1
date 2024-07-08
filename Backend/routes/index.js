var express = require('express');
var router = express.Router();
const AutenticationControllers = require("../Controllers/AutenticationControllers")
const jwt = require('jsonwebtoken')


router.post("/register",function(req,res,next){
  AutenticationControllers.register(req.body)
  .then(()=>{
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})

router.post("/login",function(req,res,next){
  AutenticationControllers.login(req.body)
  .then((results)=>{
    res.cookie('jwt',results)
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})

router.get("/logout",function(req,res,next){
  AutenticationControllers.logout(req.cookies.jwt)
  .then(()=>{
    res.clearCookie("jwt")
    res.redirect("/")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/500")
  })
})

router.get("/test", (req, res, next) => {
  res.send("Hola")
})
router.get("/500",(req,res,next)=>{
  res.send("Ha ocurrido un fallo en tu solicitud")
})

module.exports = router;
