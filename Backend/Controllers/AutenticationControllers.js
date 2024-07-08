const AutenticationModels = require("../Models/AutenticationModels")
class AutenticationControllers{
    register(userData){
        return new Promise((resolve, reject) => {
            AutenticationModels.register(userData)
                .then((results) => {
                    resolve(results)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
   
    login(userData){
        return new Promise((resolve, reject) => {
            AutenticationModels.login(userData)
                .then((results) => {
                    resolve(results)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    verify(cookie){
        return new Promise((resolve, reject) => {
            AutenticationModels.verify(cookie)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }
    logout(cookie){
        return new Promise((resolve, reject) => {
            AutenticationModels.logout(cookie)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    }
    
  
module.exports = new AutenticationControllers()