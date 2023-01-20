require('dotenv').config()

const express = require("express")
// const home = require('./views/home')
const app = express()

//Define the view engine  .../views/defaul & home
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


app.use("/places", require("./controllers/places")) //import the router - places.js

app.get('/', (req, res) => {
    res.render("home")
}) 

app.get("/places", (req, res) => {
    res.render("Index")
})

app.get("/new", (req, res) => {
    res.render('places/newPage')
})

app.get("/show", (req, res) => {
    res.render('places/showPage')
})

app.get("/edit", (req, res) => {
    res.render('places/editPage')
})

app.get('*', (req, res) => {
    res.render("error404")
})

app.listen(process.env.PORT, () => {
    console.log('I am Awake')
})