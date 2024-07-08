const connection = require("../connection")
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
require('dotenv').config();



class AutenticationModels{
         register(userData){
        return new Promise(async(resolve,reject)=>{
            const user = userData.userName
            const name = userData.name
            const password = userData.password 
            let passwordHash = await bcryptjs.hash(password,8)
            let consult = `INSERT INTO users (name,userName,password,id) VALUES ('${name}','${user}','${passwordHash}', "")`
            connection.query(consult,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
     
    }
    login(userData){
        return new Promise((resolve,reject)=>{
            const user = userData.userName
            const password = userData.password 
            if(!user || !password){
                reject(new Error("No se pueden pasar valores vacios"))
            }else{
                let consult = `SELECT * FROM users WHERE userName = ?`
                connection.query(consult,[user],async function(error,results,fields){
                    if (error) {
                        reject(error)
                    }
    
                    if (results.length === 0) {
                        reject(new Error("Usuario no encontrado"))
                    }
                    try {
                        
                        let comparation = await bcryptjs.compare(password, results[0].password);
                        if (comparation) {
                            const id = results[0].id
                            const name = results[0].name
                            const token = jwt.sign({ id: id,name:name }, process.env.JWT_SECRET);
                            resolve(token)
                        } else {
                            reject(new Error("Contraseña incorrecta"))
                        }
                    } catch (error) {
                        reject(error)
                    }
                });
            }
        
    })  
   }
   verify(cookie){
    return new Promise((resolve, reject) => {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
                let consult = `SELECT * FROM users WHERE id = ?`;
                connection.query(consult, [decoded.id], function(error, results, fields) {
                    if (error) {
                        reject(error)
                    } else {
                        if (!results || results.length === 0) {
                            reject(new Error("Usuario no encontrado"))
                        } else {
                            resolve()
                        }
                    }
                });
            } catch (error) {
                reject(error)
            }
        } else {
            reject(new Error("No se proporcionó ningún token"))
        }
    })
}

logout(cookie){
    return new Promise((resolve,reject)=>{
        if(!cookie){
            reject(new Error("No has iniciado sesion"))
        }else{
            resolve()
        }
    })
}
}
module.exports = new AutenticationModels()