const router = require('express').Router()
const places = require("../models/places")

router.get("/new", (req, res) => {
  res.render("places/new")
})

router.post('/', (req, res) => {
  
  //  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect("/places")
})



router.get('/', (req, res) => {
    // res.send('GET /places')  //  first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).
       res.render("places/index", {places})
})





module.exports = router