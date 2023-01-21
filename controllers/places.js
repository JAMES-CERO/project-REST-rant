const router = require('express').Router()


router.get("/new", (req, res) => {
  res.render("places/new")
})


router.get('/', (req, res) => {
    //use a work-around to mock up data to use.
    let places = [{

            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/chifa-mateo.jpg'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/coding-cat.jng'
          }]
          

    // res.send('GET /places')  //  first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).
       res.render("places/index", {places})
})


module.exports = router