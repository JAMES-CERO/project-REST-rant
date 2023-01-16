const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('GET /places') //  first route in places.js. We can use the index page (i.e., the GET route that will eventually show a list of all places).

})

module.exports = router