const { isAbsolute } = require("path")
const path = require ("path")

module.exports = { //definimos los metodos y exportamos el modulo 
    main: (req, res)=> {
        return res.sendFile(path.join(__dirname,"../views/home.html"))
    },
    about: (req, res)=>{
        return res.sendFile(path.join(__dirname, "../views/about.html"))
    }
}  