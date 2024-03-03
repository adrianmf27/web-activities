const express = require("express")
const routerUser = express.Router()
let users = require("../data/users")

routerUser.post("/check", (req, res) => {
    let userName = req.body.userName
    let password = req.body.password

    let user = users.find( u => u.name == userName && u.password == password)

    if (user == null){
        res.send("An error ocurred")
        return
    }

    res.send(" " + user.name + " has " + user.money + "$")

})

module.exports = routerUser