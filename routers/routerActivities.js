const express = require("express")
const routerActivities = express.Router()
let activities = require("../data/activities")
let users = require("../data/users")

routerActivities.get("/", (req, res) => {
    res.render("index", {
        activities : activities
    })
})

routerActivities.post("/donate", (req, res) => {
    let userName = req.body.userName
    let password = req.body.password
    let activityName = req.body.activityName
    let money = parseFloat(req.body.money)

    // check
    let user = users.find( (u) => {
        u.name = userName && u.password == password
    })

    if (user == null){
        res.send("An error ocurred")
        return
    }

    if (user.money < money){
        res.send("An error ocurred, you dont have oney")
        return
    }

    let activity = activities.find((a) => {
        a.activityName = activityName
    })

    if(activity == null){
        res.send("An error ocurred")
        return
    }

    user.money = user.money - money
    activity.money = activity.money + money
    res.redirect("/activities")
})

module.exports = routerActivities