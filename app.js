const express = require("express")
let app = express()
const port = 8081

app.set("views", "views")
app.set("view engine", "ejs")

/* Para leer parámetros body */
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: true}))


let routerActivities = require("./routers/routerActivities")
app.use("/activities", routerActivities)
let routerUsers = require("./routers/routerUsers")
app.use("/users", routerUsers)


app.listen(port, () => {
    console.log("Servidor activo en puerto: ", port)
})
