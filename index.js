//modules & globals 
require('dotenv').config()
const express = require("express")
const app = express()
const methodOverride = require("method-override")

//Express settings
//Define the view engine  .../views/defaul & home
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))


//controlllers 
app.use("/places", require("./controllers/places")) //import the router - places.js



//Routes
app.get('/', (req, res) => {
    res.render("home")
}) 


app.get('*', (req, res) => {
    res.render("error404")
})

app.listen(process.env.PORT, () => {
    console.log('I am Awake')
})

module.exports = app;

// app.get("/places", (req, res) => {
//     res.render("Index")
// })

// app.get("/new", (req, res) => {
//     res.render('places/new')
// })

// app.get("/show", (req, res) => {
//     res.render('places/show')
// })

// app.get("/edit", (req, res) => {
//     res.render('places/edit')
// })