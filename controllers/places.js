const router = require('express').Router()


router.get('/', (req, res) => {
    //use a work-around to mock up data to use.
    let places = [{

            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: 'http://placekitten.com/250/250'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'http://placekitten.com/250/250'
          }]
          

    // res.send('GET /places')  //  first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).
       res.render("places/index", {places})
})

module.exports = router