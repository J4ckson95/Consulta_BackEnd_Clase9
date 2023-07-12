import express from "express"
import handlebars from "express-handlebars"
import viewsRouter from "./router/views.router.js"
import __dirname from "./utils.js"

const app = express()

//? Se hace la configuración del handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", `${__dirname}/views`)
app.set("view engine", "handlebars")

//? Se utiliza el Middleware para aceptar la recepcion de objetos .json y con el comando static se fija una dirección absoluta
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

//? Se realiza el vinculo del endpoint con la carpeta router
app.use("/api/user", viewsRouter)

app.listen(2530, ()=> console.log("Iniciando el servidor desde la oficina"))
